"use server";

import prisma from "@/lib/prisma";
import { FlowToExecutionPlan } from "@/lib/workflow/executionPlan";
import { CalculateWorkflowCost } from "@/lib/workflow/helpers";
import { WorkflowStatusEnum } from "@/types/workflow";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function PublishWorkflow({
  id,
  flowDefinition,
}: {
  id: string;
  flowDefinition: string;
}) {
  const { userId } = auth();
  if (!userId) {
    throw new Error("unauthorized");
  }

  const workflow = await prisma.workFlow.findUnique({
    where: {
      id,
      userId,
    },
  });

  if (!workflow) {
    throw new Error("workflow not found");
  }

  if (workflow.status !== WorkflowStatusEnum.DRAFT) {
    throw new Error("workflow is not a draft");
  }

  const flow = JSON.parse(flowDefinition);
  const result = FlowToExecutionPlan(flow.nodes, flow.edges);
  if (result.error) {
    throw new Error("flow definition not valid");
  }

  if (!result.executionPlan) {
    throw new Error("no execution plan generated");
  }

  const creditsConsumed = CalculateWorkflowCost(flow.nodes);
  await prisma.workFlow.update({
    where: {
      id,
      userId,
    },
    data: {
      definition: flowDefinition,
      executionPlan: JSON.stringify(result.executionPlan),
      creditsConsumed,
      status: WorkflowStatusEnum.PUBLISHED,
    },
  });

  revalidatePath(`/workflow/editor/${id}`);
}
