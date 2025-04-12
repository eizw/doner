"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea";
import { MultiSelect } from "@/components/ui/multi-select";


import { useState } from "react";

const providerList = [
  {
    id: '1',
    name: "Faris Maju",
    products: [
        { name: "Nasi Goreng", price: 5.0},
        { name: "Roti Canai", price: 1.50},
        { name: "Mi Goreng", price: 4.0},
    ]
  },
  {
    id: '2',
    name: "MPH Bookstore",
    products: [
        { name: "Buku Kimia", price: 10.0},
        { name: "Buku Biologi", price: 10.0},
        { name: "Stationaries", price: 3.0},
    ]
  },

]


import Link from "next/link";

export default function FormCard() {
  const [selectedProviders, setSelectedProviders] = useState<string[]>();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Create Campaign</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Campaign Name" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="gpal">Goal</Label>
              <Input id="goal" type="number" placeholder="Goal" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="providers">Providers</Label>
              <MultiSelect
                options={
                  providerList.map((provider) => ({
                    value: provider.id,
                    label: provider.name,
                    icon: undefined,
                  }))
                }
                onValueChange={setSelectedProviders}
                defaultValue={selectedProviders}
                animation={0}
                placeholder="Select Providers"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Additional information..."/>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" asChild>
            <Link href="/org/">Cancel</Link>
        </Button>
        <Button onClick={(event) => {
          alert(`Campaign Created!`)}
        }>Create</Button>
      </CardFooter>
    </Card>
  )
}
