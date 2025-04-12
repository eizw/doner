"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,l
} from "@/components/ui/card";

import { useRouter } from "next/navigation";

export default function OrderCard({ order }: { order: any }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/org/order/${order.id}`);
  };

  return (
    <Card
      onClick={handleClick}
      className="gap-3 cursor-pointer transition-all hover:shadow-md"
    >
      <CardContent>
        <CardHeader className="px-0">
          <div className="flex w-full">
            <div className="flex flex-col">
              <CardTitle className="text-lg">{order.name}</CardTitle>
              <p>
                {order.provider}
              </p>
            </div>
            <div className="flex flex-col ml-auto">
              <p className="text-md">
                Total
              </p>
              <p className="text-2xl font-bold">
                RM{Number(order.amount).toFixed(2)}
              </p>
            </div>
          </div>
        </CardHeader>
      </CardContent>
    </Card>
  );
}
