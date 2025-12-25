import { redirect } from "next/navigation";
import { getServerAuthCookie } from "@/lib/auth.server";

export default async function InventoryTransferPage() {
  const auth = await getServerAuthCookie();

  if (!auth) {
    redirect("/login");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Inventory Transfer</h1>
      <div className="bg-white rounded-lg border p-6">
        <p className="text-gray-600">Inventory Transfer functionality coming soon...</p>
      </div>
    </div>
  );
}

