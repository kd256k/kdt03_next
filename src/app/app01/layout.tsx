import Link from "next/link";

export default function App01Layout({ children, }: { children: React.ReactNode; }) {
    return (
        <div className="h-full flex flex-col">
            <aside className="flex justify-between h-16 bg-gray-300 p-5">
                <h1 className="mb-5 text-2xl text-gray-800 font-bold">맛집 카테고리</h1>
                <Link href="/"/>
                <nav>
                    <ul className="flex">
                        <li className="text-gray-700 p-3 font-semibold">
                            <Link href="app01/junggu">중구</Link>
                        </li>
                        <li className="text-gray-700 p-3 font-semibold">동구</li>
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