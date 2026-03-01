const BTStyle = {
    blue : {
        base : "bg-blue-500",
        hover : "hover:bg-blue-900"},
    orange : {
        base : "bg-orange-500",
        hover : "hover:bg-orange-900"},
    lime : {
        base : "bg-lime-500",
        hover : "hover:bg-lime-900"},
} as const;
// typeof === 'string'

// keyof -> color, caption, onHandle
// valueof -> color[v], caption[v], onHandle[v]

type BtColor = keyof typeof BTStyle;
// BTStyle의 value( ex) color[v], caption[v], onHandle[v]) 의   
//
//              key( ex) color, caption, onHandle)의 type을 BtColor로 지정

// type BtColor = 'blue' | 'orange' | 'lime'; -> 타입을 고정하면 재사용 불가하므로


// 컴포넌트가 받아야 할 props의 타입을 정의한 인터페이스
interface TailButtonProps {
    color : BtColor
    caption : string
    onHandle? : (e:React.MouseEvent<HTMLButtonElement>) => void
}


export default function TailButton({color, caption, onHandle} : TailButtonProps) {
    const btstyle = BTStyle[color] ;
    
  return (
   <button className={`${btstyle.base} text-white rounded
                       ${btstyle.hover} hover:font-bold cursor-pointer px-4 py-2 mx-2`}
          onClick={onHandle}>
     {caption}
   </button>
  )
}
