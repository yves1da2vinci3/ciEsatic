import React from 'react'
import {BiMessage} from 'react-icons/bi'
function Question() {
    return (
        <div className="flex flex-col  shadow-lg break-words p-4 rounded-md border-2 h-[13rem]">
        <h1 className='text-gray-400  text-lg  font-semibold  '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</h1>
        <div className="border-2 text-white mt-6   rounded-full  w-28 h-8 flex items-center justify-center mr-4  cursor-pointer">
            <p className="  text-gray-400 capitalize text-sm font-bold">
            securité
              </p>
        </div>
        <div className="flex flex-row gap-x-3 mt-5">
          <div className="flex gap-x-2 items-center">
          <BiMessage className='w-8 h-8 text-gray-300 fill-current' />
          <p className="font-bold text-black">17</p>
          </div>
     
        </div>
         </div>
    )
}

export default Question
