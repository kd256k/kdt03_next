'use client'
import { useState, useEffect, useRef } from 'react'
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { FestivalType} from "./festival" ;
import TailCard from "../../components/TailCard"

// Link 경로 'react-router-dom' 확인

// 타입 선언 위치 ; 변수명 : _  , / arr : number[]
//
export default function FestivalPage() {
  const [tdata, setTdata] = useState<FestivalType[]>([]);
  const [area, setArea] = useState<React.ReactElement[]>([]);
  const [areaFestival, setAreaFestival] = useState<FestivalType[]>([]);
  // gu 변수 미선언 -- 체크하기
  const [gu, setGu] = useState<string | null>();


  const selRef = useRef<HTMLSelectElement>(null);
  // sParams 변수 미선언 -- 체크하기s
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
    const apikey = process.env.NEXT_PUBLIC_API_KEY;
    const baseUrl = `https://apis.data.go.kr/dataApi/6260000/FestivalService/getFestivalKr`;
    let url = `${baseUrl}?serviceKey=${apikey}`;
    url = `${url}&pageNo=1&numOfRows=45&resultType=json`;

    
      const resp = await fetch(url);
      const data = await resp.json();
      setTdata(data.getFestivalKr.item)

    console.log(url)
   
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

    if (selRef.current.value = ""){
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
    <div>
      <div className="w-full h-full flex flex-col justify-start items-center">
        <div className="w-9/10 p-5 h-1/4   
                                bg-amber-50 
                                flex flex-col justify-center items-center" >
          <h1 className="w-9/10 p-4 text-2xl font-bold text-center">
            부산축제정보
          </h1>
          <div className="w-9/10 flex justify-center items-center">
            <select name="sel1"
              ref={selRef}
              value={gu ? gu : ""}
              className='w-1/3 bg-gray-50 border border-gray-300 text-gray-900
                                  rounded-lg focus:ring-blue-500 focus:border-blue-500 block
                                  p-2.5'
              onChange={handleChange}>

              <option value="">--- 지역을 선택하세요---</option>
              {area}
            </select>
          </div>
        </div>
        <div className="mt-4 w-9/10 h-3/4 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            areaFestival.map((item, idx) =>  <Link
                                              href={`/festival/contents?item=${encodeURIComponent(JSON.stringify(item))}`}
                                              key={item.UC_SEQ + idx}>
              <TailCard key={item.UC_SEQ}
                        imgUrl={item.MAIN_IMG_THUMB}
                        title={item.MAIN_TITLE.includes('(') ? item.MAIN_TITLE.split('(')[0] : item.MAIN_TITLE}
                        subtitle={item.TRFC_INFO}
                        tag={item.ADDR1}
              />
            </Link>
            )
          }
        </div>
      </div>
    </div>
  )
}

// getFetchDate 함수 사용 시 -> try-catch
