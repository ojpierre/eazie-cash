"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TypewriterEffect } from "../components/typewriter-effect";

export default function PaymentPage() {
  const [transactionId, setTransactionId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment confirmation logic here
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 bg-gradient-to-br from-purple-400 to-purple-600 p-12 flex flex-col justify-center items-center text-white">
        <div className="text-4xl font-bold mb-8">EazieCash</div>
        <TypewriterEffect
          phrases={[
            "Complete Your Payment",
            "Secure Transaction",
            "Almost There!",
            "Activate Your Account",
          ]}
        />
      </div>
      <div className="w-1/2 bg-white p-12 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Activation Payment
          </h1>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              M-Pesa Payment Instructions
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Dial *334# from your M-Pesa registered line.</li>
              <li>Select "Send Money".</li>
              <li>Select "Send to other Network".</li>
              <li>Enter the Airtel mobile number 254756111419 (FRANCIS)</li>
              <li>Enter amount 540</li>
              <li>Enter your M-Pesa PIN.</li>
              <li>Confirm the details and complete the transaction.</li>
            </ol>
            <p className="font-semibold text-red-600">
              Remaining amount: Ksh 540
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="transactionId">
                  Enter Mobile or Transaction ID (TID)
                </Label>
                <Input
                  id="transactionId"
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  placeholder="07... or 173..."
                  required
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="notRobot"
                  className="h-4 w-4 text-blue-600"
                  required
                />
                <label htmlFor="notRobot" className="text-sm">
                  I'm not a robot
                </label>
              </div>
              <Button type="submit" className="w-full">
                Confirm
              </Button>
            </form>
            <p className="text-sm text-center text-gray-600">
              You can pay in little amounts for a user or if a user has paid for
              you, you can redeem his mpesa code and pay in small amounts. When
              the total deposits reaches activation fee your account is
              automatically activated
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
