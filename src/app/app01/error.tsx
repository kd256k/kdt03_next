'use client';
export default function Error(
    { error, reset }
        :
        {
            error: Error,
            reset: () => void
        }) {

    return (
        <div className="m-5">
            <h2 className="text-red-500 font-bold text-2xl">에러발생</h2>
            <p className="text-red-900 m-5">{error.message}</p>
            <button className='bg-red-600 hover:bg-red-800 text-white
                          rounded-sm font-bold py-2 px-4'
                onClick={() => reset()}>
                재시도
            </button>
        </div>
    );
}