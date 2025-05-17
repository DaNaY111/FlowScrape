"use server";

import prisma from "@/lib/prisma";
import { WorkflowStatusEnum } from "@/types/workflow";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function UnpublishWorkflow(workflowId: string) {
  const { userId } = auth();
  if (!userId) {
    throw new Error("unauthorized");
  }

  const workflow = await prisma.workFlow.findUnique({
    where: {
      id: workflowId,
      userId,
    },
  });

  if (!workflow) {
    throw new Error("workflow not found");
  }

  if (workflow.status !== WorkflowStatusEnum.PUBLISHED) {
    throw new Error("workflow is not published");
  }

  await prisma.workFlow.update({
    where: {
      id: workflowId,
      userId,
    },
    data: {
      status: WorkflowStatusEnum.DRAFT,
      executionPlan: null,
      creditsConsumed: 0,
    },
  });

  revalidatePath(`/workflow/editor/${workflowId}`);
}
