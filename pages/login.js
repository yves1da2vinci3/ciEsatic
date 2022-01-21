import React,{useState} from 'react'
import Image from 'next/image'
import LoginStyle from '../public/css/login.module.css'
import Link from 'next/link'
import userAtom from '../recoil/atoms/userAtom';
import {useSetRecoilState,useRecoilValue} from 'recoil';
import {useRouter} from 'next/router'
import httpClient from '../utils/httpClient'
import Cookies from 'js-cookie'
function login() {
    const router= useRouter()
    // call user sessio
    const [Email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [errorMessage,setErrorMessage]= useState('')
    const [error,setError] = useState(false)
    // set recoil thing
    const userInfo = useRecoilValue(userAtom);
    const setUserInfo = useSetRecoilState(userAtom);
    
    const  loginHandler = async (e) =>{
        e.preventDefault()
        const config = {
        Headers: {
            "Content-Type" : "application/json"
        }
    }
try {
    const {data} = await  httpClient.post("/users/login",{Email,password},config)
 setUserInfo(data)   
 const userData = JSON.stringify(data)
 Cookies.set("userInfo",userData,{expires : 15})     
  router.push('/')
//  session.user = data;
} catch (error) {
    console.log(error.response?.data?.message)
    setErrorMessage(error.response.data.message)
    setError(true)
}

}


    return (
        <div className="flex flex-col  items-center justify-center h-screen" >
            {error ? ( <div className="border-8 border-red-600 bg-red-300 flex items-center justify-center px-14 py-2 mb-4">
                  <p className="text-lg text-red-800">{errorMessage}</p>
            </div>) : ""}
           
            <Image className="  ml-5" src="/image/Footer_logo.png" width={250} height={80}  fixed={true} />
 <form onSubmit={loginHandler} className={`h-96 shadow-lg  flex flex-col rounded-md  w-4/5 md:w-1/3  px-4  ${LoginStyle.form} justify-center border-4 border-white `}>
      <input  onChange={(e)=> setEmail(e.target.value)} className="h-20 w-full flex  bg-blue-50 rounded-xl italic font-semibold pl-4  border-2 border-blue-400"   placeholder="entre votre email" type="text" />
      <input  onChange={(e)=> setPassword(e.target.value)} className="h-20 w-full  bg-blue-50 rounded-xl italic font-semibold pl-4 mt-16 mb-16 border-2 border-blue-400 "  placeholder="entre votre mot de passe" type="password" />

      <input  type="submit" className="mt-4 h-16 w-48 self-center bg-blue-600 text-white font-semibold capitalize italic rounded-md hover:bg-blue-800 cursor-pointer"  value="se connecter"/>
 </form>
 <p className="italic text-md md:text-xl font-semibold mt-6 ">si vous n'avez pas de compte <span className="text-blue-500 underline font-semibold"><Link href="/signup" ><a  >  Insrivez vous ici</a></Link></span> </p>
        </div>
    )
}

export default login
