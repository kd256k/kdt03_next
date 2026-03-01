const BALLCOLOR = [
    "bg-blue-500",
    "bg-orange-500",
    "bg-lime-500",
    "bg-amber-500",
    "bg-yellow-500",
    "bg-brown-500"
] as const;

// 인터페이스 로 TailBalProps n : number
// n 받는 자리도 : TailBallProps로 수정
interface TailBallProps  {
  n : number | undefined
}
export default function TailBall({n} : TailBallProps) {
    //const n 
  return (
    <div className={`w-20 h-20 rounded-full 
                    text-xl font-bold
                    text-white ${n &&BALLCOLOR[Math.floor(n/10)]}
                    m-2
                    flex justify-center items-center`}>
      {n}
    </div>
  )
}

// as const : const assertion(상수 단언)//
// 값을“절대바뀌지않는상수(literal)로고정시키는 기능
//• 읽기전용(readonly)으로만듬



//숫자, 숫자-분류되면서 색도 부여됨.