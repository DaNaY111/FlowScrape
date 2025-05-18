"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import parser from "cron-parser";
import { revalidatePath } from "next/cache";

export async function UpdateWorkflowCron({
  workflowId,
  cron,
}: {
  workflowId: string;
  cron: string;
}) {
  const { userId } = auth();

  if (!userId) {
    throw new Error("unauthorized");
  }

  try {
    const interval = parser.parse(cron, { tz: "UTC" });
    await prisma.workFlow.update({
      where: {
        id: workflowId,
        userId,
      },
      data: {
        cron,
        nextRunAt: interval.next().toDate(),
      },
    });
  } catch (error: any) {
    console.log("Invalid cron: ", error.message);
    throw new Error("invalid cron expression");
  }

  revalidatePath("/workflows");
}
