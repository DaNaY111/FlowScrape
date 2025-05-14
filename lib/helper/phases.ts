import { ExectuionPhase } from "@/generated/prisma";

type Phase = Pick<ExectuionPhase, "creditsConsumed">;
export function GetPhasesTotalCost(phases: Phase[]) {
  return phases.reduce((acc, phase) => acc + (phase.creditsConsumed || 0), 0);
}
