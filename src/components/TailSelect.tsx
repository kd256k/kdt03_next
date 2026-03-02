interface TailSelectProps {
  id : string,
  ref : React.RefObject<HTMLSelectElement>, 
  title : string, 
  opk : string[], 
  opv : string[], 
  onHandle : (e:React.ChangeEvent<HTMLSelectElement>) => void
  // '?' 선택적으로(Optional). onHandle이 발생하지 않아도 오류X
  //  cf) e.target.value
  //        e(event)
  // () => void 
  //    () : void
  // opk, opv는 배열임 
}

export default function TailSelect({ id, ref, title, opk, opv, onHandle } : TailSelectProps) {
  //ref 사용 전 선언
  return (
    <div>
      <label htmlFor={id}
             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
             {title}
      </label>
      <select id={id}
              name={id}
              ref={ref}
              onChange={onHandle}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#003675]focus:border-[#003675] block w-full p-2.5
                        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="">--{title}을 선택하세요.--</option>

              {
                opk.map((op, idx) => <option key={op} value={op}>
                                    {opv[idx]}
                                    </option>
                )
              }
      </select>
    </div>
  )
}

// <select v={} o.C={}>
//    <option v={}>{opv[idx]}></option>
// </select> 
// opk && opk.map