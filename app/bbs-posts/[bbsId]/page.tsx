import { BBSData } from '@/app/types/types';
import React from 'react'


async function getDetailBBSData(id:number) {
    const response = await fetch(`http://localhost:3000/api/post/${id}`,{
      cache: "no-store",
    });
  
    const bbsDetailData:BBSData = await response.json();
    //　fetchで帰ってくるものは配列　→ Home()と違い、ここでは一つのデータしか取得しないので配列でなくて良い　
  
    return bbsDetailData;
  }

const BBSDetailPage = async ({params}: {params:{bbsId:number}}) => {

    const bbsDetailData = await getDetailBBSData(params.bbsId)    
    console.log(bbsDetailData);
  return (
    <div>BBSDetailPage</div>
  )
}

export default BBSDetailPage