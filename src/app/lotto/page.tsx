'use client'
import {useState} from "react";
import TailBall from "@/components/TailBall";
import TailButton from "@/components/TailButton";   
export default function Lotto() {
  const [tags, setTags] = useState<React.ReactElement[]>([]);
  // useState는 null, 빈 배열, 빈 객체, union 타입, 복잡한 객체일 경우는 타입선언

  const handleclick = () => {

    //set으로 선언
    //let nums = new Set([]);
    let nums :Set<number> = new Set([]);

    while(nums.size < 7) {
      let n = Math.floor(Math.random()*45 + 1);
      //set추가. (집합에서 추가는 push가 아니라 add)
      nums.add(n);
    }

    //set => Array로 변환
    // 이름 동일하게 사용X
    let numsArr : number[] = Array.from(nums);
    let bonus = numsArr.pop();

    numsArr.sort((a,b) => a-b);

    //태그 만들기
    let tm = numsArr.map( item => <TailBall n={item} key={item}/>);
    tm = [...tm, <div className="w-20 
                                 h-20 
                                 text-4xl font-bold
                                 flex justify-center items-center"
                                 key="plus">+</div>];
    tm = [...tm, <TailBall n={bonus ? bonus : undefined} key={bonus} />];

    setTags(tm);

  }
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex justify-center items-center h-24">
        {tags}
      </div>
      <div className="mt-10">
        <TailButton color="blue" 
                    caption="로또번호생성"  
                    onHandle={handleclick} />
      </div>
    </div>
  )
}
