import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React from "react";

export default function LostPassword() {
  return (
    <div className="w-full grid place-content-center mt-[50px]">
      <div className="w-full max-w-[470px] space-y-[40px]">
      <p className="text-sm text-gray-600">
        Lost your password? Please enter your username or email address. You
        will receive a link to create a new password via email.
      </p>
      <form className="grid gap-8">
        <div className="grid gap-3">
          <Label htmlFor="email">
            Username or email address <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            required
            className="h-10 border-gray-200"
          />
        </div>
        <Button
          type="submit"
          className="w-full px-[20px] py-[5px] bg-primary hover:bg-[#E59B62] text-white border-b-2 border-[#e68b46]"
        >
          Reset password
        </Button>
      </form>
    </div>
    </div>
  );
}
