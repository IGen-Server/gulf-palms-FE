import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AddressesPage() {
  return (
    <div>
      <p className="mb-8 text-muted-foreground">
        The following addresses will be used on the checkout page by default.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
        <h2 className="text-xl font-bold">BILLING ADDRESS</h2>
         <div>
         <Link href='/my-account/billing' className="text-gray-700 hover:text-primary">Edit billing address</Link>
          <address className="rounded-lg border py-4 text-black/60">
            <p>SHIHAB SABIR</p>
            <p>Mohammadpur</p>
            <p>Qairuwan</p>
          </address>
         </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">SHIPPING ADDRESS</h2>
          <div>
          <Link href='/my-account/shipping' className="text-gray-700 hover:text-primary">Edit shipping address</Link>
          <address className="rounded-lg border py-4 text-black/60">
            <p>SHIHAB SABIR</p>
            <p>Mohammadpur</p>
            <p>Qairuwan</p>
          </address>
          </div>
        </div>
      </div>
    </div>
  )
}

