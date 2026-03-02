'use client'
import { useSearchParams, useRouter } from "next/navigation";
import TailButton from "@/components/TailButton";
import type { FestivalType } from "../festival"

import { useEffect } from "react";
export default function FestivalContents() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const itemString = searchParams.get('item');
  const item: FestivalType | undefined = itemString
                                                    ? JSON.parse(itemString)
                                                    : undefined;
  const handleHome = () => {
    if (item?.GUGUN_NM) {
      router.push(`/festival?gu=${item.GUGUN_NM}`);
    } else {
      router.push('/festival');
    }
  }

  useEffect(() => {
    if (!item) {
      router.push('/festival');
    }
  }, [item, router]);


  const kakaoMapUrl = `https://map.kakao.com/link/map/${item?.MAIN_PLACE.replace(',', '').replace(' ', '')},${item?.LAT},${item?.LNG}`;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-start items-center px-6">
      <h1 className="w-full text-2xl font-bold  p-5 mb-5">
        {item?.TITLE}
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="w-full h-90 rounded-2xl flex flex-col justify-start items-center overflow-hidden">
          <img src={item?.MAIN_IMG_NORMAL} alt={item?.TITLE} className="w-full h-full object-cover" />
        </div>
        <div className="md:col-span-2 bg-white shadow-md rounded-lg p-4">
          <div className="w-full grid grid-cols-1 md:grid-cols-6 gap-2 text-sm">
            <div className="p-2 font-bold md:text-right">축제구분</div>
            <div className="md:col-span-5  p-2">{item?.GUGUN_NM}</div>
            <div className="p-2 font-bold md:text-right">주소</div>
            <div className="md:col-span-5 p-2 flex flex-wrap items-center gap-2">
              <span>{item?.ADDR1}</span>
              <a href={kakaoMapUrl} target="_blank"
                className="bg-amber-300 p-2 rounded-sm text-sm whitespace-nowrap"
              >카카오지도보기</a>
            </div>
            <div className="p-2 font-bold md:text-right">연락처</div>
            <div className="md:col-span-5 p-2">{item?.CNTCT_TEL}</div>
            <div className="p-2 font-bold md:text-right">홈페이지</div>
            <div className="md:col-span-5 p-2 break-all">
              <a href={item?.HOMEPAGE_URL} target="_blank" rel="noopener noreferrer"
                className="text-blue-600 hover:underline">
                {item?.HOMEPAGE_URL} 
              </a>
            </div>
            <div className="p-2 font-bold md:text-right">상세내용</div>
            <div className="text-sm md:col-span-5 p-2">{item?.ITEMCNTNTS && item.ITEMCNTNTS.length > 250
              ? (() => {
                const sliced = item.ITEMCNTNTS.slice(0, 250);
                const dotIdx = sliced.lastIndexOf('.');
                return dotIdx > 0 ? sliced.slice(0, dotIdx + 1) : sliced;
              })() : item?.ITEMCNTNTS}</div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-5">
        <TailButton caption="목록으로" color="blue" onHandle={handleHome} />
      </div>
    </div>
  )
}