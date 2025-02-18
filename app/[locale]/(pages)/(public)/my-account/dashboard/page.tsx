import Link from "next/link"
import { FileText, Download, MapPin, User, LogOut } from "lucide-react"
import { useAuth } from "@/providers/Authprovider";
import { onLogout } from "@/services/utility/utility.service";

export default function Dashboard() {

  const { user } = useAuth();

  return (
    <main className="flex-1 p-6">
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">
          Hello <span className="font-semibold">{user?.name}</span>&nbsp;
          <span className="text-foreground">
            (not <span className="font-semibold">{user?.name}</span>?&nbsp;
            <Link href="/logout" className="text-[#333333] hover:underline">
              Log out
            </Link>
            )
          </span>
        </p>
      </div>
      <p className="mt-4 text-muted-foreground">
        From your account dashboard you can view your{" "}
        <Link href="/my-account/orders" className="text-[#333333] hover:underline">
          recent orders
        </Link>
        , manage your{" "}
        <Link href="/my-account/addresses" className="text-[#333333] hover:underline">
          shipping and billing addresses
        </Link>
        , and{" "}
        <Link href="/my-account/account-details" className="text-[#333333] hover:underline">
          edit your password and account details
        </Link>
        .
      </p>
    </div>

    {/* Dashboard Grid */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <Link
        href="/my-account/orders"
        className="flex flex-col items-center justify-center rounded-lg border p-8 text-center hover:bg-muted"
      >
        <FileText className="mb-4 h-12 w-12 text-[#a7a7a7] hover:text-primary" />
        <h2 className="text-sm text-[#555555] font-[600]">Orders</h2>
      </Link>
      <Link
        href="/my-account/downloads"
        className="flex flex-col items-center justify-center rounded-lg border p-8 text-center hover:bg-muted"
      >
        <Download className="mb-4 h-12 w-12 text-[#a7a7a7] hover:text-primary" />
        <h2 className="text-sm text-[#555555] font-[600]">Downloads</h2>
      </Link>
      <Link
        href="/my-account/edit-address"
        className="flex flex-col items-center justify-center rounded-lg border p-8 text-center hover:bg-muted"
      >
        <MapPin className="mb-4 h-12 w-12 text-[#a7a7a7] hover:text-primary" />
        <h2 className="text-sm text-[#555555] font-[600]">Addresses</h2>
      </Link>
      <Link
        href="/my-account/edit-account"
        className="flex flex-col items-center justify-center rounded-lg border p-8 text-center hover:bg-muted"
      >
        <User className="mb-4 h-12 w-12 text-[#a7a7a7] hover:text-primary" />
        <h2 className="text-sm text-[#555555] font-[600]">Account details</h2>
      </Link>
      <Link
        href="/logout"
        onClick={onLogout}
        className="flex flex-col items-center justify-center rounded-lg border p-8 text-center hover:bg-muted"
      >
        <LogOut className="mb-4 h-12 w-12 text-[#a7a7a7] hover:text-primary" />
        <h2 className="text-sm text-[#555555] font-[600]">Logout</h2>
      </Link>
    </div>
  </main>
  )
}
