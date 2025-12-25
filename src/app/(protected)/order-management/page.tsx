import { redirect } from "next/navigation";
import { getServerAuthCookie } from "@/lib/auth.server";

export default async function OrderManagementPage() {
  const auth = await getServerAuthCookie();

  if (!auth) {
    redirect("/login");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Order Management</h1>
      <div className="bg-white rounded-lg border p-6">
        <p className="text-gray-600">Order Management functionality coming soon...</p>
      </div>
    </div>
  );
}

