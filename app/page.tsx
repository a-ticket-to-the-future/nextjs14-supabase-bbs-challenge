//　no-storeを使い、SSRをしているため、"use client"は使えない

import Image from "next/image";
import BBSCardList from "./components/BBSCardList";
import prisma from "@/lib/prismaClient";
import { BBSData } from "./types/types";



async function getBBSAllData() {
  const response = await fetch("http://localhost:3000/api/post",{
    cache: "no-store",
  });

  const bbsAllData:BBSData[] = await response.json();
  //　fetchで帰ってくるものは配列　

  return bbsAllData;
}

// type bbsAllDataProps = {

//   id : number,
//   username?: string,
//   title?: string,
//   content?: string,
//   createdAt: Date,
// }



export default async function Home() {
  const bbsAllData = await getBBSAllData();
  

  return (
    <main >
      <BBSCardList bbsAllData={bbsAllData}/>
    </main>
  );
}
