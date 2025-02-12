import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export default function DownloadsPage() {
  return (
    <Alert className="bg-[#E0B252] border-yellow-200">
      <AlertCircle className="h-4 w-4 !text-white mt-1" />
      <AlertDescription className="flex items-center gap-2 text-white">
        No downloads available yet.
        <Button variant="link" className="font-semibold text-white">
          BROWSE PRODUCTS
        </Button>
      </AlertDescription>
    </Alert>
  )
}

