import Errbutton from "./Errbutton";

async function getData() {
  await new Promise ((resolve) => setTimeout(resolve, 3000));
  return {name : "파스타"};
}

export default async function app01() {
  const restaurant = await getData();

  return (
    <div className="w-full flex flex-col justify-start m-5 p-5">
      <h1 className="text-2xl font-bold"> 맛집추천</h1>
        <div className="w-60 border rounded-sm m-5 p-5
                        bg-gray-100 text-gray-900">
           <h2 className="text-2xl font-bold">파스타맛집</h2>
           <p className="text-gray-500 font-bold">파스타 맛있는 집</p>
        </div>
        <Errbutton />
    </div>
  );
}