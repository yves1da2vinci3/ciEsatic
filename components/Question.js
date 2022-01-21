import React from 'react'
import Link from 'next/link'
import {BiMessage} from 'react-icons/bi'
function Question({questionId,Description,category,numComments}) {
  const questionLink = `/question/${questionId}`
  const finalDescription = Description.length > 250 ? Description.substring(0,250) +"..." : Description
    return (
      <Link href={questionLink} >
        <div className="flex flex-col  shadow-lg break-words p-4 rounded-md border-2 h-[15rem] hover:ring-2 hover:ring-blue-600 cursor-pointer">
        <h1 className='text-gray-400  text-lg  font-semibold  '>{finalDescription}</h1>
        <div className="border-2 text-white mt-6   rounded-full  w-28 h-10 flex items-center justify-center mr-4  cursor-pointer">
            <p className="  text-gray-400 capitalize text-sm font-bold">
           {category}
              </p>
        </div>
        <div className="flex flex-row gap-x-3 mt-5">
          <div className="flex gap-x-2 items-center">
          <BiMessage className='w-8 h-8 text-gray-300 fill-current' />
          <p className="font-bold text-black">{numComments}</p>
          </div>
     
        </div>
         </div>
         </Link>
    )
}

export default Question
