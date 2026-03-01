'use client'
import { useState } from 'react'

export default function Errbutton() {
    const [err, setErr ] = useState(false);

    if(err) {
        throw new Error("강제로 발생시킨 에러입니다.")
    }

  return (
    <div>
      <button className='bg-red-600 hover:bg-red-800 text-white
                          rounded-sm font-bold py-2 px-4'   
                onClick={() => {setErr(true)}}>
        에러 발생시키기
      </button>
    </div>
  )
}
