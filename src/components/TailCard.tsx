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
                                className="bg-amber-100 rounded-sm p-2 inline-flex m-1 text-sm">
                                {kw}
                              </span>);
        if(tags.length >= 4 ) tags = tags.slice(0,5);
    }
    else {
        tags = <span className="bg-amber-100 rounded-sm p-2 flex m-1 text-sm h-14"> {tag}</span>

     };

    //console.log(tags)
    return (
        <div className="max-w-sm h-96 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div>
                <img className="rounded-t-lg w-full h-46 object-cover"
                    src={imgUrl} alt="" />
            </div>
            <div className="p-2 h-50 flex flex-col jusify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">
                        {title}
                    </h1>
                    <p className="mb-2 font-medium tracking-tight text-gray-800 text-sm" >
                        {subtitle}
                    </p>
                </div>
                <p className="mb-1 font-normal text-gray-700">
                    {tags}
                </p>
            </div>
        </div>
    )
}

