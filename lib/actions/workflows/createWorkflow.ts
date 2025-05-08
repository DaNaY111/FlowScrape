"use server";

import prisma from "@/lib/prisma";
import {
  createWorkflowSchema,
  createWorkflowSchemaType,
} from "@/schema/workflow";
import { WorkflowStatusEnum } from "@/types/workflow";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function CreateWorkflow(form: createWorkflowSchemaType) {
  const { success, data } = createWorkflowSchema.safeParse(form);
  if (!success) {
    throw new Error("Invalid form data");
  }
  const { userId } = auth();

  if (!userId) {
    throw new Error("401: unauthorized");
  }

  const result = await prisma.workFlow.create({
    data: {
      userId,
      status: WorkflowStatusEnum.DRAFT,
      definition: "",
      ...data,
    },
  });

  if (!result) {
    throw new Error("Failed to create workflow");
  }

  redirect(`/workflow/editor/${result.id}`);
}
