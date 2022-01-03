import React from 'react'

function PresidentItem({imgUrl,Name}) {
    return (
        <div className=" flex flex-col  h-32 items-center absolute ">
        <img src={imgUrl} className=" w-48" />
        <p className="text-white font-bold capitalize text-xl mt-6" >{Name}</p>
        </div>
    )
}

export default PresidentItem
