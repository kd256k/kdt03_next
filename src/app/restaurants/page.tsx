import RestaurantData from "@/data/부산맛집.json"
import RestaurantCard  from "@/components/RestaurantCard"
import type { Restaurant } from "@/types/restaurant";

export default function RestaurantPage() {
  const restaurants : Restaurant[] = RestaurantData;
  return (
    <main className="container mx-auto h-full flex flex-col ">
        <h1 className="text-2xl font-bold my-5 text-center">부산맛집목록</h1>
        <div className="flex-1 overflow-y-auto w-full
                        grid grid-cols-1 sm:grid-cols-2 
                        lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
                          {
                            restaurants.map( item => <RestaurantCard key={item.UC_SEQ}  
                                                                    restaurant={item}  />)
                          }
                        </div>
    </main>
  );
}