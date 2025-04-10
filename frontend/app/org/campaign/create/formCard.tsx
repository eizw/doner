import * as React from "react"

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

import Link from "next/link";

export default function FormCard() {
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
              <Input id="providers" placeholder="Campaign Name" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <Textarea for="description" placeholder="Additional information..."/>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" asChild>
            <Link href="/org/">Cancel</Link>
        </Button>
        <Button>Create</Button>
      </CardFooter>
    </Card>
  )
}
