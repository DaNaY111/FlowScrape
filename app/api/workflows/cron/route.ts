import { getAppUrl } from "@/lib/helper/appUrl";
import prisma from "@/lib/prisma";
import { WorkflowStatusEnum } from "@/types/workflow";

export async function GET(req: Request) {
  const now = new Date();
  const workflows = await prisma.workFlow.findMany({
    select: {
      id: true,
    },
    where: {
      status: WorkflowStatusEnum.PUBLISHED,
      cron: { not: null },
      nextRunAt: { lte: now },
    },
  });

  console.log("WORKFLOW TO RUN", workflows.length);
  for (const workflow of workflows) {
    triggerWorkflow(workflow.id);
  }

  return new Response(null, { status: 200 });
}

function triggerWorkflow(workflowId: string) {
  const triggerApiUrl = getAppUrl(
    `api/workflows/execute?workflowId=${workflowId}`
  );

  fetch(triggerApiUrl, {
    headers: {
      Authorization: `Bearer ${process.env.API_SECRET!}`,
    },
    cache: "no-store",
    signal: AbortSignal.timeout(5000),
  }).catch((error) =>
    console.error(
      "Error triggering workflow with id",
      workflowId,
      ":error->",
      error.message
    )
  );
}
