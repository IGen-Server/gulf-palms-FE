'use client'

import Link from "next/link"
import { FileText, Download, MapPin, User, LogOut } from "lucide-react"

export default function AccountDashboard() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full border-b md:w-64 md:border-b-0 md:border-r">
        <nav className="p-4">
          <h1 className="mb-6 text-xl font-bold">MY ACCOUNT</h1>
          <div className="space-y-2">
            <Link
              href="/dashboard"
              className="block rounded-lg px-3 py-2 text-sm font-medium text-primary hover:bg-muted"
            >
              Dashboard
            </Link>
            <Link
              href="/orders"
              className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted"
            >
              Orders
            </Link>
            <Link
              href="/downloads"
              className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted"
            >
              Downloads
            </Link>
            <Link
              href="/addresses"
              className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted"
            >
              Addresses
            </Link>
            <Link
              href="/account-details"
              className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted"
            >
              Account details
            </Link>
            <Link
              href="/logout"
              className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted"
            >
              Logout
            </Link>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">
              Hello{" "}
              <span className="text-foreground">
                (not{" "}
                <Link href="/logout" className="text-primary hover:underline">
                  Log out
                </Link>
                )
              </span>
            </p>
          </div>
          <p className="mt-4 text-muted-foreground">
            From your account dashboard you can view your{" "}
            <Link href="/orders" className="text-primary hover:underline">
              recent orders
            </Link>
            , manage your{" "}
            <Link href="/addresses" className="text-primary hover:underline">
              shipping and billing addresses
            </Link>
            , and{" "}
            <Link href="/account-details" className="text-primary hover:underline">
              edit your password and account details
            </Link>
            .
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/orders"
            className="flex flex-col items-center justify-center rounded-lg border p-8 text-center hover:bg-muted"
          >
            <FileText className="mb-4 h-12 w-12" />
            <h2 className="text-lg font-medium">Orders</h2>
          </Link>
          <Link
            href="/downloads"
            className="flex flex-col items-center justify-center rounded-lg border p-8 text-center hover:bg-muted"
          >
            <Download className="mb-4 h-12 w-12" />
            <h2 className="text-lg font-medium">Downloads</h2>
          </Link>
          <Link
            href="/addresses"
            className="flex flex-col items-center justify-center rounded-lg border p-8 text-center hover:bg-muted"
          >
            <MapPin className="mb-4 h-12 w-12" />
            <h2 className="text-lg font-medium">Addresses</h2>
          </Link>
          <Link
            href="/account-details"
            className="flex flex-col items-center justify-center rounded-lg border p-8 text-center hover:bg-muted"
          >
            <User className="mb-4 h-12 w-12" />
            <h2 className="text-lg font-medium">Account details</h2>
          </Link>
          <Link
            href="/logout"
            className="flex flex-col items-center justify-center rounded-lg border p-8 text-center hover:bg-muted"
          >
            <LogOut className="mb-4 h-12 w-12" />
            <h2 className="text-lg font-medium">Logout</h2>
          </Link>
        </div>
      </main>
    </div>
  )
}

