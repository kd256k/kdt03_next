import Link from "next/link"
import type { Restaurant } from "@/types/restaurant";

interface RestaurantProps {
  restaurant : Restaurant
}

const getGradient = (name: string) => {
  const gradients = [
    "from-orange-200 to-red-300",
    "from-yellow-200 to-orange-300",
    "from-green-200 to-teal-300",
    "from-blue-200 to-indigo-300",
    "from-pink-200 to-rose-300",
    "from-purple-200 to-violet-300",
  ]
  const index = name.charCodeAt(0) % gradients.length
  return gradients[index]
}

export default function RestaurantCard({restaurant} : RestaurantProps) {
  return (
    
    <Link href={`/restaurants/${restaurant.UC_SEQ}`}  
    className="h-80 border rounded-lg overflow-hidden  
                    shadow-md hover:shadow-xl 
                    transition-shadow duration-300 bg-white">
      <div className="relative w-full h-48 bg-gray-200">  
        {
          restaurant.MAIN_IMG_NORMAL ? (
            <img src={restaurant.MAIN_IMG_NORMAL}
            alt={restaurant.TITLE}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer" />

          ) : (
            <div className={`h-full flex items-center justify-center bg-gradient-to-br ${getGradient(restaurant.TITLE)}`}>
              <span className="text-5xl font-bold text-white drop-shadow-md">
                {restaurant.TITLE.slice(0, 5)}
              </span>
            </div>
          )
        }
      </div>
        <h2 className="text-lg font-bold truncate mt-2 px-4">{restaurant.TITLE}</h2>
        <p className="text-sm text-gray-600 my-2 px-4">{restaurant.GUGUN_NM}</p>
        <p className="text-sm text-gray-800 my-2 truncate px-4"> 대표메뉴 : {restaurant.RPRSNTV_MENU}</p>
    </Link>
  );
}