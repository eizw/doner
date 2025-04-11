"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useState } from "react";


export default function ProviderMenu({ provider 
}: {
    provider: any
}) {
    const [order, setOrder] = useState();

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
                        provider.products.map((product: any, index: number) => {
                            return (
                                <div 
                                    key={index}
                                    className="py-3 flex gap-3 items-center"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>

                                    <p
                                        className="text-md"
                                    >{product.name}</p>

                                    <div className="flex border-1 rounded-lg ml-auto overflow-hidden">
                                        <Button className="rounded-r-none " variant={'outline'}>-</Button>
                                        <p className="border-1 w-10 flex text-center items-center justify-center">
                                            0
                                        </p>
                                        <Button className="rounded-l-none" variant={'outline'}>+</Button>
                                    </div>
                                </div>
                            );
                        })
                    }
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}