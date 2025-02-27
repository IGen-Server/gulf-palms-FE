"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useUserData } from "@/providers/UserDataProvider";
import { UserService } from "@/services/api/user.service";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { useEffect, useState } from "react";

interface BillingAddressToEdit {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  city: string;
  address_1: string;
}

export default function BillingAddressForm() {

  const axiosInstanceWithLoader = CreateAxiosInstanceWithLoader(true);
  const { userSettings, setUserSettings } = useUserData();
  const [billingAddress, setBillingAddress] = useState<BillingAddressToEdit>({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    city: "",
    address_1: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, propsName: string) => {
    setBillingAddress((prevState) => ({
      ...prevState,
      [propsName]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent, ) => {
    e.preventDefault();
    console.log("Updated Billing Address:", billingAddress);

    var editedBillingAddress;

    if (userSettings?.billing) {
      editedBillingAddress = userSettings?.billing;

      editedBillingAddress['first_name'] = billingAddress.first_name;
      editedBillingAddress['last_name'] = billingAddress.last_name;
      editedBillingAddress['phone'] = billingAddress.phone;
      editedBillingAddress['email'] = billingAddress.email;
      editedBillingAddress['city'] = billingAddress.city;
      editedBillingAddress['address_1'] = billingAddress.address_1;
    } else {
      editedBillingAddress = billingAddress;
    }

    UserService.SetSettings({ "billing": editedBillingAddress }, axiosInstanceWithLoader)
      .then(response => {
        console.log(response);
        setUserSettings(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    const getSettings = async () => {
      console.log(userSettings);
      if (userSettings === null) {
        UserService.GetSettings()
          .then(response => {
            console.log(response);
            setUserSettings(response);
          })
          .catch(error => {
            console.error(error);
          });
      }
    };

    getSettings();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (userSettings?.billing) {
      setBillingAddress(userSettings.billing as BillingAddressToEdit);
    }
  }, [userSettings]);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Billing address</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="first_name">
              First name
              <span className="text-red-500 ml-0.5">*</span>
            </Label>
            <Input id="first_name" value={billingAddress.first_name} onChange={(e) => handleChange(e, 'first_name')} className="bg-gray-50" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last_name">
              Last name
              <span className="text-red-500 ml-0.5">*</span>
            </Label>
            <Input id="last_name" value={billingAddress.last_name} onChange={(e) => handleChange(e, 'last_name')} className="bg-gray-50" required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address_1">
            Full address
            <span className="text-red-500 ml-0.5">*</span>
          </Label>
          <Input id="address_1" value={billingAddress.address_1} onChange={(e) => handleChange(e, 'address_1')} className="bg-gray-50" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="city">
            Area
            <span className="text-red-500 ml-0.5">*</span>
          </Label>
          <Input id="city" value={billingAddress.city} onChange={(e) => handleChange(e, 'city')} className="bg-gray-50" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">
            Phone
            <span className="text-red-500 ml-0.5">*</span>
          </Label>
          <Input id="phone" type="tel" value={billingAddress.phone} onChange={(e) => handleChange(e, 'phone')} className="bg-gray-50" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            Email address
            <span className="text-red-500 ml-0.5">*</span>
          </Label>
          <Input id="email" type="email" value={billingAddress.email} onChange={(e) => handleChange(e, 'email')} className="bg-gray-50" required />
        </div>

        <Button type="submit" className="bg-[#ff9666] hover:bg-[#ff8652] text-white">
          SAVE ADDRESS
        </Button>
      </form>
    </div>
  )
}

