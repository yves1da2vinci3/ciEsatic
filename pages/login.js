import React from 'react'
import Image from 'next/image'
import LoginStyle from '../public/css/login.module.css'
import Link from 'next/link'
function login() {
    return (
        <div className="flex flex-col  items-center justify-center h-screen" >
            
            <Image className="  ml-5" src="/image/Footer_logo.png" width={250} height={80}  fixed={true} />
 <form className={`h-96 shadow-lg  flex flex-col rounded-md  w-4/5 md:w-1/3  px-4  ${LoginStyle.form} justify-center border-4 border-white `}>
      <input className="h-20 w-full flex  bg-blue-50 rounded-xl italic font-semibold pl-4  border-2 border-blue-400"   placeholder="entre votre email" type="text" />
      <input className="h-20 w-full  bg-blue-50 rounded-xl italic font-semibold pl-4 mt-16 mb-16 border-2 border-blue-400 "  placeholder="entre votre mot de passe" type="password" />

      <input type="submit" className="mt-4 h-16 w-48 self-center bg-blue-600 text-white font-semibold capitalize italic rounded-md hover:bg-blue-800 cursor-pointer"  value="se connecter"/>
 </form>
 <p className="italic text-md md:text-xl font-semibold mt-6 ">si vous n'avez pas de compte <span className="text-blue-500 underline font-semibold"><Link href="/signup" ><a  >  Insrivez vous ici</a></Link></span> </p>
        </div>
    )
}

export default login
