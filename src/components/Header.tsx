'use client'
import Link from "next/link";
import { useAtomValue } from "jotai"
import { isLoginAtom } from "@/atoms/atoms";

export default function Header() {
  const isLogin = useAtomValue(isLoginAtom);
  return (
      <header className='bg-[#002046] text-white shadow-md'>
        <nav className='container h-16 mx-auto flex justify-between items-center px-4'>
          <Link href="/" className='text-2xl font-bold text-blue-50'>KDT03</Link>
          <ul className='flex space-x-4'>
            <li >
              <Link href="/"
                className='hover:font-bold hover:bg-[#003675] p-2 rounded-sm'>
                홈
              </Link>
            </li>
            { isLogin && <> 
            <li>
              <Link href="/lotto"
                className='hover:font-bold hover:bg-[#003675] p-2 rounded-sm'>
                로또
              </Link>
            </li>
            <li>
              <Link href="/festival"
                className='hover:font-bold hover:bg-[#003675] p-2 rounded-sm'>
                부산축제
              </Link>
            </li>
            <li>
              <Link href="/todolist"
                className='hover:font-bold hover:bg-[#003675] p-2 rounded-sm'>
                할일목록
              </Link>
            </li>
            <li>
              <Link href="/restaurants"
                className='hover:font-bold hover:bg-[#003675] p-2 rounded-sm'>
                부산맛집목록
              </Link>
            </li>
            </>}
          </ul>
        </nav>
      </header>
  )
}
