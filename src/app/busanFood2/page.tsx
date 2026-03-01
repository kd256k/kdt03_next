'use client';
import { useState, useEffect, useRef } from "react";
import RestaurantCard from "@/components/RestaurantCard"
import type { Restaurant } from "@/types/restaurant";

export default function BusanFoodPage2() {
  const [tdata, setTdata] = useState<Restaurant[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);

  const isMounted = useRef(false);

  const fetchRestaurants = async (pageNum: number) => {
    if (loading) return;
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
    // 컴포넌트가 마운트될 때 첫 페이지 로드
    if (page === 1 && tdata.length === 0) {
      fetchRestaurants(1);
    }
  }, [page]);

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <main className="container mx-auto h-full flex flex-col ">
      <h1 className="text-2xl font-bold my-5 text-center">부산맛집목록</h1>
      <div className="flex-1 overflow-y-auto w-full
                            grid grid-cols-1 sm:grid-cols-2 
                            g:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {
          tdata.map(item => <RestaurantCard key={item.UC_SEQ}
            restaurant={item} />)
        }{
          loading &&
          <div className="text-center my-4">
            <p>더 이상 맛집이 없습니다.</p>
          </div>
        }{hasMore && !loading && (
          <><div className="text-center my-8">
            
          </div>
          <div className="text-center my-8">
              {loading && <p>맛집을 불러오는 중...</p>}
              {hasMore && !loading && (
                <button onClick={handleLoadMore}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold">더보기</button>)}
            </div></>
        )}
        {!hasMore && (
          <div className="text-center my-8">
            <p>더 이상 맛집이 없습니다.</p>
          </div>
        )

        }
        {!hasMore && !loading && <p>더 이상 맛집이 없습니다.</p>}
      </div>
    </main>
  );


}