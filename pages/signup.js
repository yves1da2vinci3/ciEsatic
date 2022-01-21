import React, { useState } from 'react'
import Image from 'next/image'
import signupStyle from '../public/css/signup.module.css'
import { useRouter } from 'next/router'
import httpClient from '../utils/httpClient'
function signup() {
    const router = useRouter()
    // valeur pour l'utilisateur
    const [Email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword]= useState('')
    const [phoneNumber,setphoneNumber]= useState('')
    const [section,setSection] = useState('web')
    const [type,setType]= useState('student')
    const [UserName,setUserName]= useState('')
    const [SecretCode,setsecretCode]= useState(0)
    const [errorMessage,setErrorMessage]= useState('')
    const [error,setError] = useState(false)
    const [succes,setSucces] = useState(false)
    const [imgURL,setimgURL] = useState("https://cdn-icons-png.flaticon.com/512/149/149071.png");

    const SignupHandler = async (e) =>{
        e.preventDefault()
        if(password !== confirmPassword){
          setErrorMessage("les mots de passes ne correpondent pas")
          setError(true)
        }else{
          const config = {
            Headers: {
                "Content-Type" : "application/json"
            }
        }
          try {
            const {data} = await  httpClient.post("/users",{UserName,phoneNumber,section,Email,password,imgURL,SecretCode},config)
            setErrorMessage('Felicitations,vous avez été inscrit avec succès')
            setSucces(true)
            setTimeout(() => {
              setSucces(false)
            
            }, 5000)
            setTimeout(() => {
                    router.push('/login')
                  },2000)
          }catch(err){
            console.log(err)
            setErrorMessage(err.response.data.message)
            setError(true)
          }
        }
   
   
    }

    const [show,setShow] = useState(false)
    const toggleShow = (e) => {
        setType(e.target.value)
        if(e.target.value !== 0 ){
   setsecretCode(0)
        }
        setShow(!show)
        console.log(show)
    }
    // const addImageToPost = (e) =>{
    
    //     const reader = new FileReader();
    //     if(e.target.files[0]){
    //       reader.readAsDataURL(e.target.files[0])
    //     }
    //     reader.onload = (readEvent) => {
    //       let image = readEvent.target.result;
    //       setimgURL(readEvent.target.result)
    //     }
    //  }
    return (
        <div className="flex flex-col  items-center justify-center h-auto overflow-y-scroll" >
                {error ? ( <div className="border-8 border-red-600 bg-red-300 flex items-center justify-center px-14 py-2 mb-4">
                  <p className="text-lg text-red-800">{errorMessage}</p>
            </div>) : ""}
                {succes ? ( <div className="border-8 border-green-600 bg-green-300 flex items-center justify-center px-14 py-2 mb-4">
                  <p className="text-lg text-green-800">{errorMessage}</p>
            </div>) : ""}
            
        <Image className="  ml-5" src="/image/Footer_logo.png" width={250} height={80}  fixed={true} />
<form onSubmit={SignupHandler} className={`h-[22.5rem] shadow-lg  flex flex-col rounded-md  w-[24rem]  md:w-[30rem]   px-4  ${signupStyle.form} justify-center border-4 border-white `}>
  <input required onChange={(e) => setUserName(e.target.value)}  className="h-20 w-full flex  bg-blue-50  italic font-semibold pl-4  border-2 border-blue-400"   placeholder="entre votre nom d''utilisateur " type="text" />
  <input required  onChange={(e) => setEmail(e.target.value)} className="h-20 w-full  bg-blue-50  italic font-semibold pl-4 mt-8  border-2 border-blue-400 "  placeholder="entre votre email" type="email" />
  <input required  onChange={(e) => setphoneNumber(e.target.value)} className="h-20 w-full  bg-blue-50  italic font-semibold pl-4 mt-8 mb-8 border-2 border-blue-400 "  placeholder="entre votre numero de telephone" type="number" />
  <input required  onChange={(e) => setPassword(e.target.value)} className="h-20 w-full flex  bg-blue-50  italic font-semibold pl-4  border-2 border-blue-400"   placeholder=" entrer votre mot de passe" type="password" />
  <input required  onChange={(e) => setConfirmPassword(e.target.value)} className="h-20 w-full  bg-blue-50  italic font-semibold pl-4 mt-5 mb-2 border-2 border-blue-400 "  placeholder="confirmez votre mot de passe" type="password" />
  <select   onChange={toggleShow} className="h-26 w-full  bg-blue-50  italic font-semibold pl-4 mt-8  border-2 border-blue-400" >
      <option value="student" >Statut : apprenant</option>
      <option value="coach"> Statut : coach</option>
  </select>
  {show ? (<input  onChange={(e) => setsecretCode(e.target.value)} className="h-26 w-full flex  bg-blue-50 italic font-semibold pl-4  border-2 border-blue-400 mt-2"   placeholder="entre votre code secret" type="text" />) : "" }
  <select  onChange={(e) => setSection(e.target.value)} className="h-14 w-full  mb-6 bg-blue-50  italic font-semibold pl-4 mt-8  border-2 border-blue-400" >
      <option value="web"> Section : web</option>
      <option  value="IA"> Section : intelligence artificielle</option>
      <option  value="Mobile"> Section : Mobile </option>
      <option  value="big data"> Section : big data</option>
      <option  value="securité"> Section : securite informatique</option>
      <option  value="IOT"> Section : IOT</option>
  </select>
  <p class="text-gray-500 italic font-semibold">exemple : https://cdn-icons-png.flaticon.com/512/149/149071.png</p>
  <div className="mb-4  flex items-center justify-between">
  <input  onChange={(e) => setimgURL(e.target.value)}  className="h-12 w-8/12 flex  bg-blue-50  italic font-semibold pl-4  border-2 border-blue-400"   placeholder="copier l'url de votre image ici " type="text" />

        {/* <label htmlFor="imgURL" className="bg-blue-600 hover:bg-blue-700 rounded-sm  align-middle text-white px-2 py-3 cursor-pointer" > 
       choisir une image
        </label>
      <input className="appearance-none hidden " onChange={addImageToPost}  id='imgURL' type="file" /> */}
      <img  src={imgURL} className="rounded-full w-14 h-14" />
    </div>
  <input type="submit" className=" mb-8 mt-4 h-24 w-48 self-center bg-blue-600 text-xl text-white font-semibold capitalize italic rounded-md hover:bg-blue-800 cursor-pointer"  value="s'inscrire"/>
</form>
    </div>
    )
}

export default signup
