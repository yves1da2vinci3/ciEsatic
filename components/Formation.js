import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import signupStyle from '../public/css/signup.module.css'
function Formation({FormationName,FormationCoverImage,FormationDescription}) {
    return (
        <div className="relative h-full w-full flex justify-center flex-col ">
        <p className="text-white absolute uppercase  text-xl md:text-5xl font-bold mb-48 ml-4">{FormationName}</p>
        <p className="text-white absolute  italic text-lg md:text-lg font-bold ml-4">{FormationDescription}</p>
        <div className="bg-blue-700 text-white px-1 md:px-4 py-1 md:py-3 rounded-md  shadow-2xl  h-10 md:h-16  w-48 md:w-64 flex items-center justify-center ml-4 hover:bg-blue-900 cursor-pointer absolute mt-48">
           <p className="  capitalize text-sm  font-bold">decouvrez plus </p>
           <AiOutlineArrowRight className="w-6 h-6 ml-6 font-bold " />
       </div>
       {/* boutton de direction */}
       
            <img src={FormationCoverImage} className={  `w-full h-4/6 ${signupStyle.image}`} />
            </div>
    )
}

export default Formation
