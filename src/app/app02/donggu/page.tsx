import Link from 'next/link';

export default function Donggupage() {
  return (
    <div className="w-full flex flex-col justify-start m-5 p-5">
      <h1 className="text-2xl font-bold"> 분류: 동구</h1>
        <div className="w-60 border border-[#CDD7E6] rounded-sm m-5 p-5
                        bg-white text-gray-900">
           <h2 className="text-2xl font-bold">파스타맛집</h2>
           <p className="text-gray-500 font-bold">파스타 맛있는 집</p>
           <div>
              <Link href="/"/>
           </div>
        </div>
    </div>
  );
}