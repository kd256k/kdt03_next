function RestaurantSkeleton() {
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

export default function Loading() {
  return (
    <main className="container mx-auto h-full flex flex-col">
      <h1 className="text-2xl font-bold my-5 text-center">부산맛집목록</h1>
      <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {Array(8).fill(0).map((_, i) => <RestaurantSkeleton key={i} />)}
      </div>
    </main>
  );
}