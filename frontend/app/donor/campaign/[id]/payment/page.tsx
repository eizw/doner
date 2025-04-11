"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CampaignCard from "@/app/donor/campaignCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const dummyCampaigns = [
  {
    id: "1",
    name: "Masjid Al-Ikhsan",
    description: loremIpsum,
    goal: 4000,
    raised: 2000,
  },
  {
    id: "2",
    name: "Flood Relief",
    description: loremIpsum,
    goal: 5000,
    raised: 1200,
  },
  {
    id: "3",
    name: "Community Clinic",
    description: loremIpsum,
    goal: 3000,
    raised: 900,
  },
];

interface PaymentPageProps {
  params: { id: string };
}

export default function PaymentPage({ params }: PaymentPageProps) {
  const router = useRouter();
  const { id } = params;

  // Find the matching campaign
  const campaign = dummyCampaigns.find((c) => c.id === id);

  if (!campaign) {
    return (
      <div className="p-6 text-center text-red-600">Campaign not found</div>
    );
  }

  const presetAmounts = [20, 50, 100];
  const [amount, setAmount] = useState<number | "">("");
  const [method, setMethod] = useState<"touchnGo" | "duitNow">("touchnGo");

  const handlePreset = (val: string) => {
    const num = Number(val);
    setAmount(isNaN(num) ? "" : num);
  };

  const proceed = () => {
    alert(
      `Donating RM${amount} to "${campaign.name}" via ${
        method === "touchnGo" ? "Touch ’n Go" : "DuitNow"
      }`
    );
    // router.push(`/donor/campaign/${id}/payment/confirm?amount=${amount}&method=${method}`);
  };

  return (
    <div className="max-w-lg mx-auto space-y-6 p-6">
      {/* 1. Campaign overview */}
      <CampaignCard campaign={campaign} />

      {/* 2. Amount selection */}
      <Card>
        <CardHeader>
          <CardTitle>Choose Donation Amount</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ToggleGroup
            type="single"
            value={
              amount && presetAmounts.includes(amount)
                ? amount.toString()
                : undefined
            }
            onValueChange={handlePreset}
            className="grid grid-cols-3 gap-2"
          >
            {presetAmounts.map((amt) => (
              <ToggleGroupItem
                key={amt}
                value={amt.toString()}
                className="px-4 py-2 border rounded-md text-center cursor-pointer"
              >
                RM{amt}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>

          <div className="space-y-1">
            <Label htmlFor="custom-amount">Or enter custom amount</Label>
            <Input
              id="custom-amount"
              type="number"
              placeholder="e.g. 75"
              value={presetAmounts.includes(amount as number) ? "" : amount}
              onChange={(e) =>
                setAmount(e.target.value ? Number(e.target.value) : "")
              }
            />
          </div>
        </CardContent>
      </Card>

      {/* 3. Payment method */}
      <Card>
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <RadioGroup
            value={method}
            onValueChange={(v) => setMethod(v as "touchnGo" | "duitNow")}
            className="space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="touchnGo" id="touchnGo" />
              <Label htmlFor="touchnGo">Touch ’n Go</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="duitNow" id="duitNow" />
              <Label htmlFor="duitNow">DuitNow</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      {/* 4. Proceed button */}
      <Button
        className="w-full"
        disabled={!amount || amount <= 0}
        onClick={proceed}
      >
        Proceed to Pay {amount ? `RM${amount}` : ""}
      </Button>
    </div>
  );
}
