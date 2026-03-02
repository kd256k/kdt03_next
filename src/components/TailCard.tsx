interface TailCardProps {
    imgUrl : string
    title : string
    subtitle : string
    tag : string 
}

export default function TailCard({ imgUrl, title, subtitle, tag } : TailCardProps) {
    // 문자열이 아니라 노드가 들어감.
    // split 되는 배열은 tm으로 .
    let tags : React.ReactElement | React.ReactElement[];
    // elemet가 들어가거나/ 배열이 전부 들어가거나

    if (tag.includes(',')) {
        let tm = tag.split(',')
        tags = tm.map(kw => <span key={kw}
                                className="bg-[#EFF5FF] rounded-sm p-2 inline-flex m-1 text-sm">
                                {kw}
                              </span>);
        if(tags.length >= 4 ) tags = tags.slice(0,5);
    }
    else {
        tags = <span className="bg-[#EFF5FF] rounded-sm p-2 flex m-1 text-sm h-14 items-center"> {tag}</span>

     };

    //console.log(tags)
    return (
        <div className="w-full h-96 bg-white border border-[#CDD7E6] rounded-lg shadow-sm overflow-hidden">
            <div>
                <img className="rounded-t-lg w-full h-46 object-cover"
                    src={imgUrl} alt="" 
                    onError={(e) => { e.currentTarget.src = "https://placehold.co/400x300?text=No+Image"; }}
                    />
            </div>
            <div className="p-2 h-50 flex flex-col jusify-between">
                <div className="m-1">
                    <h1 className="text-2xl font-bold text-gray-800">
                        {title}
                    </h1>
                    <p className="mb-2 font-medium tracking-tight text-gray-700 text-sm line-clamp-3" >
                        {subtitle}
                    </p>
                </div>
                <p className="font-normal text-gray-700 line-clamp-2">
                    {tags}
                </p>
            </div>
        </div>
    )
}

