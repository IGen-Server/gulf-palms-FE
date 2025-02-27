"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useUserData } from "@/providers/UserDataProvider";
import { UserService } from "@/services/api/user.service";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { useEffect, useState } from "react";

interface ShippingAddressToEdit {
  first_name: string;
  last_name: string;
  city: string;
  address_1: string;
  address_2: string;
}

export default function ShippingAddressForm() {

  const axiosInstanceWithLoader = CreateAxiosInstanceWithLoader(true);
  const { userSettings, setUserSettings } = useUserData();
  const [shippingAddress, setShippingAddress] = useState<ShippingAddressToEdit>({
    first_name: "",
    last_name: "",
    city: "",
    address_1: "",
    address_2: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, propsName: string) => {
    setShippingAddress((prevState) => ({
      ...prevState,
      [propsName]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent, ) => {
    e.preventDefault();
    console.log("Updated Shipping Address:", shippingAddress);

    var editedShippingAddress;

    if (userSettings?.shipping) {
      editedShippingAddress = userSettings?.shipping;

      editedShippingAddress['first_name'] = shippingAddress.first_name;
      editedShippingAddress['last_name'] = shippingAddress.last_name;
      editedShippingAddress['city'] = shippingAddress.city;
      editedShippingAddress['address_1'] = shippingAddress.address_1;
    } else {
      editedShippingAddress = shippingAddress;
    }

    UserService.SetSettings({ "shipping": editedShippingAddress }, axiosInstanceWithLoader)
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
    if (userSettings?.shipping) {
      setShippingAddress(userSettings.shipping as ShippingAddressToEdit);
    }
  }, [userSettings]);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Shipping address</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="first_name">
              First name
              <span className="text-red-500 ml-0.5">*</span>
            </Label>
            <Input id="first_name" value={shippingAddress.first_name} onChange={(e) => handleChange(e, 'first_name')} className="bg-gray-50" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last_name">
              Last name
              <span className="text-red-500 ml-0.5">*</span>
            </Label>
            <Input id="last_name" value={shippingAddress.last_name} onChange={(e) => handleChange(e, 'last_name')} className="bg-gray-50" required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address_1">
            Full address
            <span className="text-red-500 ml-0.5">*</span>
          </Label>
          <Input id="address_1" value={shippingAddress.address_1} onChange={(e) => handleChange(e, 'address_1')} className="bg-gray-50" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="address_2">Apartment, suite, unit, etc. (optional)</Label>
          <Input id="address_2" value={shippingAddress.address_2} onChange={(e) => handleChange(e, 'address_2')} className="bg-gray-50" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="city">
            Town / City
            <span className="text-red-500 ml-0.5">*</span>
          </Label>
          <Input id="city" value={shippingAddress.city} onChange={(e) => handleChange(e, 'city')} className="bg-gray-50" required />
        </div>

        <Button type="submit" className="bg-[#ff9666] hover:bg-[#ff8652] text-white">
          SAVE ADDRESS
        </Button>
      </form>
    </div>
  )
}

