'use client'
import { useState, useEffect, useRef } from 'react'
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { FestivalType} from "./festival" ;
import TailCard from "../../components/TailCard"

export default function FestivalPage() {
  const [loading, setLoading] = useState(true);
  const [tdata, setTdata] = useState<FestivalType[]>([]);
  const [area, setArea] = useState<React.ReactElement[]>([]);
  const [areaFestival, setAreaFestival] = useState<FestivalType[]>([]);
  const [gu, setGu] = useState<string | null>();


  const selRef = useRef<HTMLSelectElement>(null);
  const sParams = useSearchParams();

  const handleChange = () => {
    setGu(selRef.current?.value); //아무것도 없으면 undefined -> '?'로 option chain' 
    if (selRef.current?.value == "") {
      setAreaFestival([]);
      return;
    }

    let tm = tdata.filter(item => item.GUGUN_NM == selRef.current?.value);
    setAreaFestival(tm);
  }


  const getFetchData = async () => {
    setLoading(true);
    const apikey = process.env.NEXT_PUBLIC_API_KEY;
    const baseUrl = `/api/6260000/FestivalService/getFestivalKr`;
    let url = `${baseUrl}?serviceKey=${apikey}`;
    url = `${url}&pageNo=1&numOfRows=45&resultType=json`;

    try{
      const resp = await fetch(url);
      const text = await resp.text();
      const data = JSON.parse(text);
      setTdata(data.getFestivalKr.item);
    } catch (error) {
      console.error("Festival API 에러:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getFetchData()
  }, []);

  useEffect(() => {
    // get("gu")에서 체크하므로 밖에서 처리 . 
    if (!sParams.get("gu") || !selRef.current) return;

    // gu가 있는 경우
    const gu = sParams.get("gu"); 
    if (gu) {
      selRef.current.value= gu;
      setGu(gu);
      handleChange();
    }

    if (selRef.current.value === ""){
      setGu('');
      setAreaFestival([]);
    }
  }, [sParams, area]);

  //
  useEffect(() => {
    if (tdata.length == 0) return;

    let tm = tdata.map(item => item.GUGUN_NM);
    tm =  [...new Set(tm)].sort();

    let tmOp  = tm.map(item => <option key={item}
                                      value={item}>
                                      {item}
                                </option>)

    setArea(tmOp)
  }, [tdata]);

  return (
      <div className="w-full min-h-full flex flex-col justify-start items-center">
        <h1 className="w-[70%] m-6 mb-0 p-4 text-2xl text-gray-800 font-bold text-center
                        bg-[#D3E1FB] rounded-t-lg">
          부산축제정보
        </h1>
        <div className="sticky top-0 z-10 w-[70%] bg-[#D3E1FB] rounded-b-lg p-3 flex justify-center items-center">
            <select name="sel1"
              ref={selRef}
              value={gu ? gu : ""}
              className='w-1/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm
                          rounded-lg focus:ring-[#003675] focus:border-[#003675] block p-2.5'
              onChange={handleChange}>
              <option value="">--- 지역을 선택하세요---</option>
              {area}
            </select>
        </div>
        {loading && (
          <div className="mt-4 w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {Array(6).fill(0).map((_,i) => (
              <div key={i} className="w-full bg-white rounded-lg shadow overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-4">
                  <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        )}
        {!loading && <div className="mt-4 w-[70%] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center">
          {
            areaFestival.map((item, idx) =>  <Link
                                              href={`/festival/contents?item=${encodeURIComponent(JSON.stringify(item))}`}
                                              key={item.UC_SEQ + idx}
                                              className="block w-full">
              <TailCard key={item.UC_SEQ}
                        imgUrl={item.MAIN_IMG_THUMB}
                        title={item.MAIN_TITLE.includes('(') ? item.MAIN_TITLE.split('(')[0] : item.MAIN_TITLE}
                        subtitle={item.TRFC_INFO}
                        tag={item.ADDR1}
              />
            </Link>
            )
          }
        </div>}
      </div>
  )
}
