import Link from "next/link";

export default function App02Layout({ children, }: { children: React.ReactNode; }) {
    return (
        <div className="flex h-full">
            <aside className="bg-gray-200" >
                <h1 className="mb-5 text-2xl text-gray-800 font-bold">맛집 카테고리</h1>
                <Link href="/" />
                <nav>
                    <ul>
                        <li className="mb-2 text-gray-700 p-3 font-semibold">
                            <Link href="app02/junggu">중구</Link>
                        </li>
                        <li className="text-gray-700 p-3 font-semibold">
                             <Link href="app02/donggu">동구</Link>
                        </li>
                        <li className="text-gray-700 p-3 font-semibold">서구</li>
                    </ul>
                </nav>
            </aside>
            <div className="flex-1">
                {children}
            </div>
        </div>
    );
}