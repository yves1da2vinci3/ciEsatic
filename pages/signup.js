import React, { useState } from 'react'
import Image from 'next/image'
import signupStyle from '../public/css/signup.module.css'
function signup() {
    const [show,setShow] = useState(false)
    const toggleShow = () => {
        setShow(!show)
        console.log(show)
    }
    return (
        <div className="flex flex-col  items-center justify-center h-screen" >
            
        <Image className="  ml-5" src="/image/Footer_logo.png" width={250} height={80}  fixed={true} />
<form className={`h-96 shadow-lg  flex flex-col rounded-md  w-4/5 md:w-1/3  px-4  ${signupStyle.form} justify-center border-4 border-white `}>
  <input className="h-14 w-full flex  bg-blue-50 rounded-xl italic font-semibold pl-4  border-2 border-blue-400"   placeholder="entre votre nom d''utilisateur " type="text" />
  <input className="h-14 w-full  bg-blue-50 rounded-xl italic font-semibold pl-4 mt-8 mb-8 border-2 border-blue-400 "  placeholder="entre votre email" type="email" />
  <input className="h-14 w-full flex  bg-blue-50 rounded-xl italic font-semibold pl-4  border-2 border-blue-400"   placeholder=" entrer votre mot de passe" type="password" />
  <input className="h-14 w-full  bg-blue-50 rounded-xl italic font-semibold pl-4 mt-5 mb-2 border-2 border-blue-400 "  placeholder="confirmez votre mot de passe" type="password" />
  <select  onChange={toggleShow} className="h-14 w-full  bg-blue-50  italic font-semibold pl-4 mt-8  border-2 border-blue-400" >
      <option >Statut : apprenant</option>
      <option> Statut : coach</option>
  </select>
  {show ? (<input className="h-14 w-full flex  bg-blue-50 rounded-xl italic font-semibold pl-4  border-2 border-blue-400 mt-2"   placeholder="entre votre code secret" type="text" />) : "" }
  <select className="h-14 w-full  bg-blue-50  italic font-semibold pl-4 mt-8  border-2 border-blue-400" >
      <option> Section : web</option>
      <option> Section : intelligence artificielle</option>
      <option> Section : Mobile </option>
      <option> Section : big data</option>
      <option> Section : securite informatique</option>
      <option> Section : IOT</option>
  </select>
  <input type="submit" className="mt-4 h-16 w-48 self-center bg-blue-600 text-xl text-white font-semibold capitalize italic rounded-md hover:bg-blue-800 cursor-pointer"  value="s'inscrire"/>
</form>
    </div>
    )
}

export default signup
