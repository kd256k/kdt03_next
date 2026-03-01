import Link from "next/link";

export default function NotFound() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold">맛집 에러</h2>
            <p>맛집이 존재하지 않습니다.</p>
            <Link href="/restaurants"   
                    className="mt-4 px-4 py-2
                    bg-blue-500 text-white rounded hover:bg-blue-600"> 맛집목록</Link>
        </div>
    );
}