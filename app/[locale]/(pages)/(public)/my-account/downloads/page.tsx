"use client";

import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next";

export default function DownloadsPage() {
  const { t } = useTranslation("common")

  return (
    <Alert className="bg-[#E0B252] border-yellow-200">
      <AlertCircle className="h-4 w-4 !text-white mt-1" />
      <AlertDescription className="flex items-center gap-2 text-white">
        {t("downloads.title1")}
        <Button variant="link" className="font-semibold text-white uppercase">
          {t("downloads.title2")}
        </Button>
      </AlertDescription>
    </Alert>
  )
}

