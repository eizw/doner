'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import GoalBar from './goalBar';

import { useRouter } from 'next/navigation';

export default function CampaignCard({ 
    campaign 
}: {
    campaign: any
}) {
    const router = useRouter();

    return (
        // <Card onClick={() => router.push('/campaign')}>
        <Card className="gap-3">
            <CardHeader>
                <div className="w-full h-32 border-1 border-black rounded-lg flex items-center justify-center">
                    Image
                </div>
            </CardHeader>
            <CardContent>
                <CardTitle className="text-lg">{ campaign.name }</CardTitle>
                <CardDescription className="mb-3 h-10 overflow-hidden">
                    { campaign.description }
                </CardDescription>
                <GoalBar value={campaign.raised} max={campaign.goal}></GoalBar>
            </CardContent>
            <CardFooter>
                <div className="flex w-full">
                    <p className="font-semibold flex mb-auto">RM{campaign.raised} of RM{campaign.goal}</p>
                    <div className="flex flex-col ml-auto">
                        <p>Balance:</p>
                        <p className="font-bold">RM{
                            Number(campaign.balance).toFixed(2)
                        }</p>
                    </div>
                </div>
                    
            </CardFooter>
        </Card>
    );
}