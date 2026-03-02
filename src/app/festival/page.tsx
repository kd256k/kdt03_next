import  { Suspense } from 'react';
import FestivalPage from './FestivalPage';

function FestivalSkeleton() {
  return (
    <div className="w-full min-h-full flex flex-col justify-start items-center">
      <h1 className="w-[70%] m-6 mb-0 p-4 text-2xl text-gray-800 font-bold text-center bg-[#D3E1FB] rounded-t-lg">
        부산축제정보
      </h1>
      <div className="w-[70%] bg-[#D3E1FB] rounded-b-lg p-3 flex justify-center items-center">
        <div className="w-1/3 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
      </div>
      <div className="mt-4 w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {Array(6).fill(0).map((_, i) => (
          <div key={i} className="w-full bg-white rounded-lg shadow overflow-hidden animate-pulse">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-4">
              <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default function FestivalContentsPage() {
  return (
    <div>
      <Suspense fallback={<FestivalSkeleton />}>
        <FestivalPage />
      </Suspense>
    </div>
  );
}