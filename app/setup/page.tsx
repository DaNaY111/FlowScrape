import { SetupUser } from "@/lib/actions/billing/setupUser";

export default async function SetupPage() {
  return await SetupUser();
}
