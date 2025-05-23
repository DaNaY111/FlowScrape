"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function RemoveWorkflowSchedule(workflowId: string) {
  const { userId } = auth();
  if (!userId) {
    throw new Error("unauthorized");
  }

  await prisma.workFlow.update({
    where: {
      id: workflowId,
      userId,
    },
    data: {
      cron: null,
      nextRunAt: null,
    },
  });

  revalidatePath("/workflows");
}
