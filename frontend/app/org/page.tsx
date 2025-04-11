import CampaignCard from './campaignCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

let campaignList = [
  {
    id: "1",
    name: "Masjid Al-Ikhsan",
    description: loremIpsum,
    goal: 4000,
    raised: 2000,
    balance: 564.0,
  },
  {
    id: "2",
    name: "Flood Relief",
    description: loremIpsum,
    goal: 4000,
    raised: 200,
    balance: 564.0,
  },
  {
    id: "3",
    name: "Masjid Al-Ikhsan",
    description: loremIpsum,
    goal: 4000,
    raised: 2000,
    balance: 564.0,
  },
];

export default function Dashboard() {
    return (
          <div className="flex flex-col p-6 gap-3 h-screen max-h-screen">
            <div className="flex flex-row mx-3 ">
              <h1 className="font-semibold mr-auto flex items-center">
                Your Campaigns
              </h1>
              <Button>
                Sort
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                  />
                </svg>
              </Button>
            </div>

            

            <div className="flex flex-col gap-6 h-full scrollbar ">
              {campaignList.map((campaign, index) => {
                return <CampaignCard key={index} campaign={campaign}></CampaignCard>;
              })}
            </div>

            <div className="flex">
                <Button className="w-full" asChild>
                    <Link href="/org/campaign/create">+ New Campaign</Link>
                </Button>
            </div>
        </div>
    );
}
