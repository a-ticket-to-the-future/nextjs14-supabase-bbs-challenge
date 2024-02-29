"use server"

import { z } from "zod"
import { formSchema } from "../bbs-posts/create/page"
import  prisma  from "@/lib/prismaClient";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const postBBS = async ({username,title,content}:z.infer<typeof formSchema>) => {
    //z.infer<typeof formSchema>はzodが用意している部分型抜き用の記法
    // const { username, title, content} = await  req.json();

     await prisma.post.create({
        data:{
            username,
            title,
            content,
        },
    });
    // return NextResponse.json(post);
    revalidatePath("/")
    //　↑キャッシュをパージするらしい↑
    redirect("/")
}