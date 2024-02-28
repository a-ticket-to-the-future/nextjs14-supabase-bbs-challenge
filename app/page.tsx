import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" grid lg:grid-cols-3">
      <Card className="" >
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloremque voluptas, impedit voluptates a ab aperiam alias autem libero. Placeat, delectus officiis repellat animi excepturi illum impedit voluptatibus quaerat laboriosam?
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={"/bbs-posts/1"}>Read More</Link>
      </CardFooter>
    </Card>
    </main>
  );
}
