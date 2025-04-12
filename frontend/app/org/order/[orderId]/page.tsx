import {
    Table,
    TableBody,
    TableFooter,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import QRDialog from './qrDialog';

import React from 'react';

const orderList = [
    {
      id: "1",
      name: "ORDER-3910480139132",
      amount: 65.00,
      provider: "MPH Bookstore",
      items: [
          {
              name: "Stationaries",
              price: 3.00,
              count: 5
          },
          {
              name: "Biology Book",
              price: 10.00,
              count: 5
          },
      ]
    },
    {
      id: "2",
      name: "ORDER-22918491283442",
      amount: 50.00,
      provider: "Faris Maju",
      items: [
          {
              name: "Mi Goreng",
              price: 5.00,
              count: 10
          },
      ]
    },
];

export default function OrderDetails({ params 
}: {
    params: any
}) {
    params = React.use(params);
    const order: any = orderList.find(({ id }) => 
        id == params.orderId,
    );

    
    return (
        <div className="page-container">
            <div className="flex flex-col py-3 border-b-1 mb-3">
                <h1 className="font-semibold">
                    Order Details
                </h1>
                <p className="text-3xl font-bold">
                    {order.name}
                </p>
            </div>

            <div className="flex flex-col gap-12">
                <div className="flex flex-col">
                    <h1 className="text-md">
                        Provider
                    </h1>
                    <p className="text-2xl font-bold">
                        {order.provider}
                    </p>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead className="w-78">Item</TableHead>
                        <TableHead >Price (RM)</TableHead>
                        <TableHead >Quantity</TableHead>
                        <TableHead className="text-right">Amount (RM)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            order.items.map((item, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{ item.name }</TableCell>
                                        <TableCell>{ Number(item.price).toFixed(2) }</TableCell>
                                        <TableCell>{ item.count }</TableCell>
                                        <TableCell className="text-right">{ Number(item.price * item.count).toFixed(2) }</TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">{Number(order.amount).toFixed(2)}</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>

            <div className="flex justify-end mt-12">
                <QRDialog campaignUrl={`https://localhost:3000/org/order/${order.id}/confirm`} />
            </div>
        </div>
    )
}