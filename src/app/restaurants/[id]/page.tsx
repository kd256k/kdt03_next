import Link from 'next/link'
import type { Restaurant } from "@/types/restaurant";
import RestaurantData from "@/data/부산맛집.json"
import { notFound } from 'next/navigation';

interface RestaurantDetailProps {
    params : Promise<{
        id : string
    }>
}

export async function generateStaticParams() {
    const restaurants: Restaurant[] = RestaurantData;
    return restaurants.map((restaurant) => ({id : String(restaurant.UC_SEQ)}))
}

export default async function RestaurantDetail ({ params } : RestaurantDetailProps ) {
const { id } = await params;
const restaurant = RestaurantData.find(item => item.UC_SEQ === Number(id) );

if (!restaurant) {
    notFound();
}

const kakaoMapUrl = `https://map.kakao.com/link/map/${restaurant.MAIN_TITLE.replace(',', '').replace(' ', '')},${restaurant.LAT},${restaurant.LNG}`;
const description = restaurant.ITEMCNTNTS.replace(/\\n/g, '\n' ) || '상세설명이 없습니다.';
const usageTime = restaurant.USAGE_DAY_WEEK_AND_TIME.replace(/\\n/g, '\n' ) || '운영시간 정보가 없습니다.';
    return (
    <main className="w-full max-w-6xl mx-auto flex flex-col justify-start items-center px-6 py-4">
        <h1 className="text-2xl font-bold mb-4">{restaurant.MAIN_TITLE}</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="w-full h-80 rounded-2xl overflow-hidden bg-gray-200">
                {restaurant.MAIN_IMG_NORMAL ? (
                    <img src={restaurant.MAIN_IMG_NORMAL}
                        alt={restaurant.TITLE}
                        className="w-full h-full object-cover" />
                ) : (
                    <div className="h-full flex justify-center items-center text-gray-500">이미지 없음</div>
                )}
            </div>
            <div className="md:col-span-2 bg-white shadow-md rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-2 text-sm">
                    <div className="p-3 md:text-right font-medium text-gray-500">구군</div>
                    <div className="md:col-span-5 p-3">{restaurant.GUGUN_NM}</div>
                    <div className="p-3 md:text-right font-medium text-gray-500">주소</div>
                    <div className="md:col-span-5 p-3 flex flex-wrap items-center gap-2">
                        <span>{restaurant.ADDR1}</span>
                        <a href={kakaoMapUrl} target="_blank"
                            className="bg-amber-300 p-2 rounded-sm text-sm whitespace-nowrap">
                                        카카오지도보기</a>
                    </div>
                    <div className="p-3 md:text-right font-medium text-gray-500">대표메뉴</div>
                    <div className="md:col-span-5 p-3">{restaurant.RPRSNTV_MENU}</div>
                    <div className="p-3 md:text-right font-medium text-gray-500">연락처</div>
                    <div className="md:col-span-5 p-3">{restaurant.CNTCT_TEL}</div>
                    <div className="p-3 md:text-right font-medium text-gray-500">운영시간</div>
                    <div className="md:col-span-5 p-3 whitespace-pre-line">{usageTime}</div>
                    <div className="p-3 md:text-right font-medium text-gray-500">홈페이지</div>
                    <div className="md:col-span-5 p-3 break-all">
                        {restaurant.HOMEPAGE_URL ? (
                            <a href={restaurant.HOMEPAGE_URL} target="_blank" rel="noopener noreferrer"
                            className="text-blue-600 hover:underline">{restaurant.HOMEPAGE_URL}</a>
                        ) : '정보 없음'}
                    </div>
                    <div className="p-3 md:text-right font-medium text-gray-500">상세내용</div>
                    <div className="md:col-span-5 p-3 whitespace-pre-line">{description}</div>
                </div>
            </div>
        </div>
        <div className="flex justify-center mt-6">
            <Link href="/restaurants"
                    className="bg-[#002046] hover:bg-[#2A5C96] text-white font-bold px-6 py-2 rounded">
                목록으로
            </Link>
        </div>
    </main>
  );
}