import { Suspense } from 'react';
import FestivalContents from './FestivalContents';

export default function FestivalContentsPage() {
  return (
    <div>
      <Suspense fallback={<div>로딩중...</div>}>
        <FestivalContents/>
      </Suspense>
    </div>
  );
}