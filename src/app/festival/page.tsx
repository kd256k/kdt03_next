import  { Suspense } from 'react';
import FestivalPage from './FestivalPage';
 
export default function FestivalContentsPage() {
  return (
    <div>
      <Suspense fallback={<div>로딩중...</div>}>
        <FestivalPage />
      </Suspense>
    </div>
  );
}