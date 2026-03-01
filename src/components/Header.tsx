'use client'
import Link from "next/link";
import { useAtomValue } from "jotai"
import { isLoginAtom } from "@/atoms/atoms";

export default function Header() {
  const isLogin = useAtomValue(isLoginAtom);
  return (
    <div>
      <header className='bg-blue-600 text-white shadow-md'>
        <nav className='container h-20 mx-auto flex justify-between items-center'>
          <div className='text-2xl font-bold text-blue-50'>KDT03</div>
          <ul className='flex space-x-4'>
            <li >
              <Link href="/"
                className='hover:font-bold hover:bg-cyan-200 p-2 rounded-sm'>
                홈
              </Link>
            </li>
            { isLogin && <> 
            <li className='hover:font-bold'>
              <Link href="/lotto"
                className='hover:font-bold hover:bg-cyan-200 p-2 rounded-sm'>
                로또
              </Link>
              <Link href="/festival"
                className='hover:font-bold hover:bg-cyan-200 p-2 rounded-sm'>
                부산축제
              </Link>
              <Link href="/todolist"
                className='hover:font-bold hover:bg-cyan-200 p-2 rounded-sm'>
                할일목록
              </Link>
              <Link href="/restaurants"
                className='hover:font-bold hover:bg-cyan-200 p-2 rounded-sm'>
                부산맛집목록
              </Link>
            </li>
            </>}
          </ul>
        </nav>
      </header>
    </div>
  )
}
