import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

import React from 'react'

const BBSCard = () => {
  return (
    <div>
        <Card className="" >
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloremque voluptas, impedit voluptates a ab aperiam alias autem libero. Placeat, delectus officiis repellat animi excepturi illum impedit voluptatibus quaerat laboriosam?
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={"/bbs-posts/1"} className=" text-blue-500">Read More</Link>
      </CardFooter>
    </Card>
    </div>
  )
}

export default BBSCard