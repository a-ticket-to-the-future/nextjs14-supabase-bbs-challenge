import prisma from "@/lib/prismaClient"
import { NextResponse } from "next/server";


// bbsID:numberにするとエラーになってしまう。ここではurlで取得してくるのでstring型になるから
export async function GET(req:Request,{params}:{params:{bbsId:string}}) {
    const bbsId = params.bbsId;
    const bbsDetailData = await prisma.post.findUnique({where: {
        id: parseInt(bbsId), //parseIntは整数変換してくれる
    },
});
    return NextResponse.json(bbsDetailData);
}