"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useState } from "react";


export default function ProviderMenu({
    providerKey,
    provider,
    onChange,
}: {
    providerKey: number,
    provider: any,
    onChange: any,
}) {
    const [order, setOrder] = useState<any[]>(
        provider.products.map((product: any, index: number) => ({
          index: index.toString(),
          ...product,
          count: 0,
        }))
    );
    const [total, setTotal] = useState<number>(0);

    const updateOrder = (productId: number, value: number) => {
        const nextOrder = order.map((product, index) => {
            if (index == productId) {
                return {
                    ...product,
                    count: value,
                };
            }
            return product;
        })
        setOrder(nextOrder);
        let sum = 0;
        nextOrder.map(product => {
            sum += product.price * product.count;
        })
        setTotal(sum);
        onChange(providerKey, total);
    }
    
    const handleChange = (event: any) => {
        const productId = event.target.name;
        const value = event.target.value;

        updateOrder(productId, value);
    }

    const subCount = (event: any, product: any) => {
        updateOrder(product.index, Math.max(0, product.count - 1));
    }

    const addCount = (event: any, product: any) => {
        updateOrder(product.index, product.count + 1);
    }


    return (
        <Accordion type="single" collapsible
            className="border-1 rounded-md px-6"
        >
            <AccordionItem value="item-1">
                <AccordionTrigger
                    className="hover:no-underline"
                >{ provider.name }</AccordionTrigger>
                <AccordionContent>
                    {
                        order.map((product: any, index: number) => {
                            return (
                                <div 
                                    key={index}
                                    className="py-3 flex gap-3 items-center"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>

                                    <div className="flex flex-col">
                                        <p
                                            className="text-md"
                                        >{product.name}</p>
                                        <p
                                            className="text-sm font-bold"
                                        >RM{Number(product.price).toFixed(2)}</p>
                                    </div>


                                    <div className="flex border-1 rounded-lg ml-auto overflow-hidden">
                                        <Button className="rounded-r-none " variant={'outline'}
                                            onClick={(e) => subCount(e, product)}
                                            id="sub">-</Button>
                                        <input 
                                            className="border-1 w-10 flex text-center items-center justify-center" 
                                            min="0"
                                            type="number"
                                            value={product.count}
                                            onChange={handleChange}
                                            name={index.toString()}
                                        />
                                        <Button className="rounded-l-none" variant={'outline'} 
                                            onClick={(e) => addCount(e, product)}
                                            id="add">+</Button>
                                    </div>
                                </div>
                            );
                        })
                    }
                    <div className="border-t-1 pt-3 flex flex-col">
                        <p className="text-md">Total</p>
                        <p className="text-xl font-bold">RM{Number(total).toFixed(2)}</p>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}