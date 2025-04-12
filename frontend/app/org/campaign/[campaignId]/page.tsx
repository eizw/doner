"use client"

import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import ProviderMenu from "./providerMenu";

import React, { useState } from "react";

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

let campaignList = [
    {
        id: '1',
        name: "Masjid Al-Ikhsan",
        description: loremIpsum,
        goal: 4000,
        raised: 2000,
        balance: 564.00,
    },
    {
        id: '2',
        name: "Flood Relief",
        description: loremIpsum,
        goal: 4000,
        raised: 200,
        balance: 564.00,
    },
    {
        id: '3',
        name: "Masjid Al-Ikhsan",
        description: loremIpsum,
        goal: 4000,
        raised: 2000,
        balance: 564.00,
    },
];

let providerList = [
    {
        name: "Faris Maju",
        products: [
            { name: "Nasi Goreng", price: 5.0},
            { name: "Roti Canai", price: 1.50},
            { name: "Mi Goreng", price: 4.0},
        ]
    },
    {
        name: "MPH Bookstore",
        products: [
            { name: "Buku Kimia", price: 10.0},
            { name: "Buku Biologi", price: 10.0},
            { name: "Stationaries", price: 3.0},
        ]
    },

]

export default function CampaignProfile({ params 
}: {
    params: any
}) {
    params = React.use(params);
    const campaign: any = campaignList.find(({ id }) => 
        id == params.campaignId,
    );

    const [order, setOrder] = useState<number[]>(new Array(providerList.length).fill(0));
    const [total, setTotal] = useState(0);

    const handleChange = (key: number, total: number) => {
        const nextOrder = order.map((value, index) => {
            return (index == key) ? total : value;
        })
        let sum = 0;
        nextOrder.map((total) => sum += total);
        setOrder(nextOrder);
        setTotal(sum);

    }
    
    return (
        <div className="page-container">
            <div className="w-full min-h-48 border-1 border-black flex items-center justify-center">
                Image
            </div>
            <div className="flex flex-col gap-3">
                <p className="text-lg font-bold">{ campaign.name }</p>
                <hr />
                <p className="mb-3 h-24 scrollbar text-sm">
                    { campaign.description }
                </p>
                <Progress 
                    className="h-4"
                    value={Math.min(campaign.raised / campaign.goal * 100, 100)}
                />
                <p className="font-semibold flex mb-auto">RM{campaign.raised} of RM{campaign.goal}</p>
            </div>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col mr-auto">
                    <p>Balance:</p>
                    <p className="text-lg font-bold">RM{
                        Number(campaign.balance).toFixed(2)
                    }</p>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="font-semibold text-lg un">Providers</p>
                    <hr />
                    <div className="flex flex-col scrollbar gap-3">
                        {
                            providerList.map((provider, index) => {
                                return (
                                    <ProviderMenu 
                                        key={index}
                                        provider={provider}
                                        providerKey={index}
                                        onChange={handleChange}
                                    />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-end">
                <div className="pt-3 flex flex-col">
                    <p className="text-lg">Total</p>
                    <p className="text-2xl font-bold">RM{Number(total).toFixed(2)}</p>
                </div>
                <Button className="ml-auto"
                    onClick={(e) => {alert('Succesfully redeemed! New order has been created.')}}
                >
                    Redeem
                </Button>
            </div>
        </div>
    )
}