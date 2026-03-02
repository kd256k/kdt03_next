'use client';
import { useState, useEffect, useRef } from "react";
import RestaurantCard from "@/components/RestaurantCard"
import type { Restaurant } from "@/types/restaurant";

function BusanFoodSkeleton() {
  return (
    <div className="h-80 border border-[#CDD7E6] rounded-lg overflow-hidden bg-white animate-pulse">
      <div className="w-full h-48 bg-gray-200"></div>
      <div className="p-4">
        <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );
}

export default function BusanFoodPage1() {
  const [tdata, setTdata] = useState<Restaurant[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchRestaurants = async (pageNum: number) => {
    setLoading(true);

    try {
      const resp = await fetch(`/api/busanFood?page=${pageNum}&limit=6`);
      if (!resp.ok) {
        throw new Error("맛집 정보를 불러오는데 실패했습니다.");
      }

      const { data, currentPage, totalPages } = await resp.json();
      setTdata((prev) => [...prev, ...data]);

      if (currentPage >= totalPages) {
        setHasMore(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRestaurants(page);
  }, [page]);

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <main className="container mx-auto h-full flex flex-col">
      <h1 className="text-2xl font-bold my-5 text-center">부산맛집목록</h1>
      <div className="flex-1 overflow-y-auto w-full
                            grid grid-cols-1 sm:grid-cols-2 
                            lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {
          tdata.map(item => <RestaurantCard key={item.UC_SEQ}
            restaurant={item} />)}
          {loading && Array(6).fill(0).map((_, i) => <BusanFoodSkeleton key={`sk-${i}`} />)}
      </div>
      <div className="text-center my-8">
            {hasMore && !loading && (
              <button onClick={handleLoadMore}
                className="bg-[#003675] hover:bg-[#2A5C96] text-white font-bold px-6 py-2 rounded">
                  더보기
                </button>
            )}
            {!hasMore && !loading && <p>더 이상 맛집이 없습니다.</p>}
      </div>
    </main>
  );
}