import { redirect } from "next/navigation";
import { getServerAuthCookie } from "@/lib/auth.server";
import { DashboardContent } from "@/components/pages/dashboard/DashboardContent";

export default async function DashboardPage() {
  const auth = await getServerAuthCookie();

  if (!auth) {
    redirect("/login");
  }

  return <DashboardContent />;
}

