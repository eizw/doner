"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import CampaignCard from "@/app/donor/campaignCard"; // adjust path as needed
import React, { useEffect, useState } from "react";

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...";

const orgList = [
  {
    id: "1",
    name: "Al-Ikhwan Bhd",
  }
]

// Dummy campaign data
const allCampaigns = [
  {
    id: "1",
    orgId: "1",
    name: "Masjid Al-Ikhsan",
    description: loremIpsum,
    goal: 4000,
    raised: 2000,
    balance: 564.0,
  },
  {
    id: "2",
    orgId: "1",
    name: "Flood Relief",
    description: loremIpsum,
    goal: 4000,
    raised: 200,
    balance: 564.0,
  },
  {
    id: "3",
    orgId: "1",
    name: "Masjid Al-Ikhsan",
    description: loremIpsum,
    goal: 4000,
    raised: 2000,
    balance: 564.0,
  },
];

export default function OrgLandingPage({
  params,
}: {
  params: { orgId: string };
}) {
  const { orgId } = React.use(params);
  const org = orgList.find((org) => org.id == orgId);
  const [campaigns, setCampaigns] = useState<any[]>([]);

  useEffect(() => {
    // Simulate fetching filtered campaigns
    const orgCampaigns = allCampaigns.filter(
      (campaign) => campaign.orgId === orgId
    );
    setCampaigns(orgCampaigns);
  }, [orgId]);

  return (
    <div className="page-container">
      <div className="flex flex-col gap-3 justify-center items-center">
        <Avatar>
          <AvatarImage src="https://i.pinimg.com/564x/c4/d7/9d/c4d79d31e65896bb323de884eebc9ae6.jpg" />
          <AvatarFallback>NGO</AvatarFallback>
        </Avatar>

        <div className="flex gap-1 items-center">
          <p className="text-xl">{ org.name }</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
          </svg>
        </div>
        <h1 className="text-2xl font-semibold mb-4">Campaigns</h1>
      </div>

      <div className="flex flex-col gap-4 scrollbar">
        {campaigns.length > 0 ? (
          campaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))
        ) : (
          <p className="text-muted-foreground">No campaigns found.</p>
        )}
      </div>
    </div>
  );
}
