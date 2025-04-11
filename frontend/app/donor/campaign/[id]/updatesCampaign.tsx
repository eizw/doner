import { Card, CardContent } from "@/components/ui/card";

import React from "react";

interface Update {
  id: string;
  date: string;
  amountUsed: number;
  description: string;
}

// Dummy updates data, grouped by campaign
const updatesByCampaign: Record<string, Update[]> = {
  "1": [
    {
      id: "1",
      date: "2025-04-11",
      amountUsed: 500,
      description: "Purchased food supplies for the community kitchen.",
    },
    {
      id: "2",
      date: "2025-04-15",
      amountUsed: 1_500,
      description: "Renovated the mosque’s main hall roof.",
    },
  ],
  "2": [
    {
      id: "3",
      date: "2025-04-08",
      amountUsed: 2_000,
      description: "Distributed emergency relief kits to flood victims.",
    },
    {
      id: "4",
      date: "2025-04-12",
      amountUsed: 800,
      description: "Repaired damaged boats for local fishermen.",
    },
  ],
  "3": [
    {
      id: "5",
      date: "2025-04-05",
      amountUsed: 1_200,
      description: "Purchased medical supplies for the clinic.",
    },
    {
      id: "6",
      date: "2025-04-10",
      amountUsed: 600,
      description: "Organized a free health check-up camp.",
    },
  ],
};

export default function Updates({ campaignId }: { campaignId: string }) {
  const updates = updatesByCampaign[campaignId] || [];

  return (
    <div className="flex flex-col gap-4 px-4 my-5">
      <h1 className="font-semibold mr-auto flex items-center text-2xl">
        Campaign Updates
      </h1>

      {updates.map((upd) => (
        <Card key={upd.id} className="shadow-none border">
          <CardContent>
            {/* First row: date and amount */}
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{upd.date}</span>
              <span className="text-sm font-medium">RM{upd.amountUsed}</span>
            </div>
            {/* Description below */}
            <p className="mt-2 text-sm text-gray-600">{upd.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
