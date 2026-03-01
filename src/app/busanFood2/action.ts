'use server';
import { supabase } from "@/supabase/client";
import type { Restaurant } from "@/types/restaurant";

import { useState, useEffect, useRef } from "react";
import RestaurantCard from "@/components/RestaurantCard"
import  fetchRestaurants  from "@/app/busanFood/page";

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
                            // ㄴ fetch 함수를 호출
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
    data: data as Restaurant[],
            currentPage: page,
            totalPages,
            error: null,
   
  );


}