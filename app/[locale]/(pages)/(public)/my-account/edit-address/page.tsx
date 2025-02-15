'use client'

import { Button } from "@/components/ui/button"
import { UserAsCustomer } from "@/models/user/user-as-customer";
import { useAuth } from "@/provider/Authprovider";
import { UserService } from "@/services/api/user.service";
import Link from "next/link"
import { useEffect, useState } from "react";

export default function AddressesPage() {

    const { userSettings } = useAuth();
    
    // const [userSettings, setUserSettings] = useState<UserAsCustomer>();
    
    // useEffect(() => {
    //   const getOrders = async () => {
    //     UserService.GetSettings()
    //       .then(response=> {
    //         console.log(response);
    //         setUserSettings(response);
    //       })
    //       .catch(error => {
    //         console.error(error);
    //       });
    //   };
  
    //   getOrders();
    // }, []);

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
            <p>{userSettings?.billing?.first_name} {userSettings?.billing?.last_name}</p>
            <p>{userSettings?.billing?.address_1}</p>
            <p>{userSettings?.billing?.address_2}</p>
            <p>{userSettings?.billing?.city}</p>
          </address>
         </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">SHIPPING ADDRESS</h2>
          <div>
          <Link href='/my-account/shipping' className="text-gray-700 hover:text-primary">Edit shipping address</Link>
          <address className="rounded-lg border py-4 text-black/60">
            <p>{userSettings?.shipping?.first_name} {userSettings?.shipping?.last_name}</p>
            <p>{userSettings?.shipping?.address_1}</p>
            <p>{userSettings?.shipping?.address_2}</p>
            <p>{userSettings?.shipping?.city}</p>
          </address>
          </div>
        </div>
      </div>
    </div>
  )
}

