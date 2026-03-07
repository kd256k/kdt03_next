import Link from "next/link"
import type { Restaurant } from "@/types/restaurant";
import RestaurantImage from "./RestaurantImage";

interface RestaurantProps {
  restaurant : Restaurant
}

export default function RestaurantCard({restaurant} : RestaurantProps) {
  return (
    
    <Link href={`/restaurants/${restaurant.UC_SEQ}`}  
    className="h-80 border rounded-lg overflow-hidden  
                    shadow-md hover:shadow-xl 
                    transition-shadow duration-300 bg-white">
      <div className="relative w-full h-48 bg-gray-200">  
        <RestaurantImage src={restaurant.MAIN_IMG_NORMAL} title={restaurant.TITLE} />
      </div>
        <h2 className="text-lg font-bold truncate mt-2 px-4">{restaurant.TITLE}</h2>
        <p className="text-sm text-gray-600 my-2 px-4">{restaurant.GUGUN_NM}</p>
        <p className="text-sm text-gray-800 my-2 truncate px-4"> 대표메뉴 : {restaurant.RPRSNTV_MENU}</p>
    </Link>
  );
}