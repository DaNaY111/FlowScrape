"use server";

import prisma from "@/lib/prisma";
import {
  duplicateWorkflowSchema,
  duplicateWorkflowSchemaType,
} from "@/schema/workflow";
import { WorkflowStatusEnum } from "@/types/workflow";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function DuplicateWorkflow(form: duplicateWorkflowSchemaType) {
  const { success, data } = duplicateWorkflowSchema.safeParse(form);
  if (!success) {
    throw new Error("invalid form data");
  }

  const { userId } = auth();
  if (!userId) {
    throw new Error("unauthorized");
  }

  const workflow = await prisma.workFlow.findUnique({
    where: {
      id: data.workflowId,
      userId,
    },
  });

  if (!workflow) {
    throw new Error("workflow not found");
  }

  const result = await prisma.workFlow.create({
    data: {
      userId,
      name: data.name,
      description: data.description,
      status: WorkflowStatusEnum.DRAFT,
      definition: workflow.definition,
    },
  });

  if (!result) {
    throw new Error("failed to duplicate workflow");
  }

  revalidatePath("/workflows");
}
