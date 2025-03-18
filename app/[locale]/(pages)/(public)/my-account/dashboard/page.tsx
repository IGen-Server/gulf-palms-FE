'use client'

import Link from "next/link"
import { FileText, Download, MapPin, User, LogOut } from "lucide-react"
import { onLogout } from "@/services/utility/utility.service";
import { useUserDataProvider } from "@/providers/UserDataProvider";
import { useTranslation } from "react-i18next";

export default function Dashboard() {

  const { user } = useUserDataProvider();
  const { t, i18n: { language } } = useTranslation("common")

  return (
    <main className="flex-1 p-6">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground font-serif">
            {t("dashboard.hello")} <span className="font-semibold">{user?.name}</span>&nbsp;
            <span className="text-foreground">
              ({t("dashboard.not")} <span className="font-semibold">{user?.name}</span>?&nbsp;
              <Link href="/logout" className="text-[#333333] hover:underline">
                {t("account.logout")}
              </Link>
              )
            </span>
          </p>
        </div>
        <p className="mt-4 text-muted-foreground">
          {t("dashboard.title1")} {" "}
          <Link href="/my-account/orders" className="text-[#333333] hover:underline">
            {t("dashboard.title2")}
          </Link>
          , {t("dashboard.title3")} {" "}
          <Link href="/my-account/addresses" className="text-[#333333] hover:underline">
            {t("dashboard.title5")}
          </Link>
          , {t("dashboard.title6")}{" "}
          <Link href="/my-account/account-details" className="text-[#333333] hover:underline">
            {t("dashboard.title7")}
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
          <h2 className="text-sm text-[#555555] font-[600]">{t("account.orders")}</h2>
        </Link>
        <Link
          href="/my-account/downloads"
          className="flex flex-col items-center justify-center rounded-lg border p-8 text-center hover:bg-muted"
        >
          <Download className="mb-4 h-12 w-12 text-[#a7a7a7] hover:text-primary" />
          <h2 className="text-sm text-[#555555] font-[600]">{t("account.downloads")}</h2>
        </Link>
        <Link
          href="/my-account/edit-address"
          className="flex flex-col items-center justify-center rounded-lg border p-8 text-center hover:bg-muted"
        >
          <MapPin className="mb-4 h-12 w-12 text-[#a7a7a7] hover:text-primary" />
          <h2 className="text-sm text-[#555555] font-[600]">{t("account.addresses")}</h2>
        </Link>
        <Link
          href="/my-account/edit-account"
          className="flex flex-col items-center justify-center rounded-lg border p-8 text-center hover:bg-muted"
        >
          <User className="mb-4 h-12 w-12 text-[#a7a7a7] hover:text-primary" />
          <h2 className="text-sm text-[#555555] font-[600]">{t("account.details")}</h2>
        </Link>
        <Link
          href="/logout"
          onClick={onLogout}
          className="flex flex-col items-center justify-center rounded-lg border p-8 text-center hover:bg-muted"
        >
          <LogOut className="mb-4 h-12 w-12 text-[#a7a7a7] hover:text-primary" />
          <h2 className="text-sm text-[#555555] font-[600]">{t("account.logout")}</h2>
        </Link>
      </div>
    </main>
  )
}
