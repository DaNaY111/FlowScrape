import "server-only";
import { revalidatePath } from "next/cache";
import {
  ExectuionPhaseStatus,
  WorkflowExectuionStatus,
} from "@/types/workflow";
import prisma from "../prisma";
import { waitFor } from "../helper/waitFor";
import { ExectuionPhase } from "@/generated/prisma";
import { AppNode } from "@/types/appNode";
import { TaskRegistry } from "./task/registry";
import { ExecutorRegistry } from "./executor/registry";
import { Environment } from "@/types/executor";

export async function ExecuteWorkflow(executionId: string) {
  const execution = await prisma.workFlowExecution.findUnique({
    where: {
      id: executionId,
    },
    include: {
      workflow: true,
      phases: true,
    },
  });

  if (!execution) {
    throw new Error("execution not found");
  }

  const environment: Environment = { phases: {} };

  await initializeWorkflowExecution(executionId, execution.workflowId);
  await initializePhaseStatuses(execution);

  let creditsConsumed = 0;
  let executionFailed = false;
  for (const phase of execution.phases) {
    const phaseExecution = await executeWorkflowPhase(phase, environment);
    if (!phaseExecution.success) {
      executionFailed = true;
      break;
    }
  }

  await finalizeWorkflowExecution(
    executionId,
    execution.workflowId,
    executionFailed,
    creditsConsumed
  );

  revalidatePath("/workflows/runs");
}

async function initializeWorkflowExecution(
  executionId: string,
  workflowId: string
) {
  await prisma.workFlowExecution.update({
    where: { id: executionId },
    data: {
      startedAt: new Date(),
      status: WorkflowExectuionStatus.RUNNING,
    },
  });

  await prisma.workFlow.update({
    where: {
      id: workflowId,
    },
    data: {
      lastRunAt: new Date(),
      lastRunStatus: WorkflowExectuionStatus.RUNNING,
      lastRunId: executionId,
    },
  });
}

async function initializePhaseStatuses(execution: any) {
  await prisma.exectuionPhase.updateMany({
    where: {
      id: {
        in: execution.phases.map((phase: any) => phase.id),
      },
    },
    data: {
      status: ExectuionPhaseStatus.PENDING,
    },
  });
}

async function finalizeWorkflowExecution(
  executionId: string,
  workflowId: string,
  exectuionFailed: boolean,
  creditsConsumed: number
) {
  const finalStatus = exectuionFailed
    ? WorkflowExectuionStatus.FAILED
    : WorkflowExectuionStatus.COMPLETED;

  await prisma.workFlowExecution.update({
    where: { id: executionId },
    data: {
      status: finalStatus,
      completedAt: new Date(),
      creditsConsumed,
    },
  });

  await prisma.workFlow
    .update({
      where: {
        id: workflowId,
        lastRunId: executionId,
      },
      data: {
        lastRunStatus: finalStatus,
      },
    })
    .catch((err) => {
      // this means that we have triggered other runs for this workflow
    });
}

async function executeWorkflowPhase(
  phase: ExectuionPhase,
  environment: Environment
) {
  const startedAt = new Date();
  const node = JSON.parse(phase.node) as AppNode;
  setupEnvironmentForPhase(node, environment);

  await prisma.exectuionPhase.update({
    where: { id: phase.id },
    data: {
      status: ExectuionPhaseStatus.RUNNING,
      startedAt,
    },
  });

  const creditsRequired = TaskRegistry[node.data.type].credits;
  console.log(
    `Executing phase ${phase.name} with ${creditsRequired} credits required`
  );

  const success = await executePhase(phase, node, environment);

  await finalizePhase(phase.id, success);
  return { success };
}

async function finalizePhase(phaseId: string, success: boolean) {
  const finalStatus = success
    ? ExectuionPhaseStatus.COMPLETED
    : ExectuionPhaseStatus.FAILED;

  await prisma.exectuionPhase.update({
    where: {
      id: phaseId,
    },
    data: {
      status: finalStatus,
      completedAt: new Date(),
    },
  });
}

async function executePhase(
  phase: ExectuionPhase,
  node: AppNode,
  environment: Environment
): Promise<boolean> {
  const runFn = ExecutorRegistry[node.data.type];
  if (!runFn) {
    return false;
  }

  return await runFn(environment.phases[node.id]);
}

function setupEnvironmentForPhase(node: AppNode, environment: Environment) {
  environment.phases[node.id] = { inputs: {}, outputs: {} };
  const inputs = TaskRegistry[node.data.type].inputs;
  for (const input of inputs) {
    const inputValue = node.data.inputs[input.name];
    if (inputValue) {
      environment.phases[node.id].inputs[input.name] = inputValue;
      continue;
    }
  }
}
