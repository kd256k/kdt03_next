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

const kakaoMapUrl = `https://map.kakao.com/link/map/${restaurant.MAIN_TITLE.replace(',', '').replace(' ', '')},${restaurant?.LAT},${restaurant?.LNG}`;
const description = restaurant.ITEMCNTNTS.replace(/\\n/g, '\n' ) || '상세설명이 없습니다.';
const usageTime = restaurant.USAGE_DAY_WEEK_AND_TIME.replace(/\\n/g, '\n' ) || '운영시간 정보가 없습니다.';
    return (
    <div>
      {restaurant?.TITLE}
      {restaurant?.ADDR1}

      <Link href="/restaurants">목록</Link>
    </div>
  );


}