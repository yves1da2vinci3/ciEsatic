import React,{useEffect} from 'react'
import Link from 'next/link'
import {MdOutlineMenu,MdClose} from 'react-icons/md'
import {useRouter} from 'next/router'
import userAtom from '../recoil/Atoms/userAtom'
import {useRecoilState} from 'recoil'
import Cookies  from 'js-cookie'
export default  function NavBar ({openNav,changeNav}) {
  const [userInfo,setUserinfo] = useRecoilState(userAtom)
  const router = useRouter()

  
const logoutHandler = () =>{
  setUserinfo({})
  Cookies.remove("userInfo");
  router.push('/login')
}
  let open = openNav
    return (
        <nav className=" sticky bg-transparent   font-sans w-full  flex flex-row  h-24 py-4 items-center justify-between z-40 mt-0 pl-4"   >
    <img className=" w-48 h-8" src="/image/Footer_logo.png"  />
    <ul className="flex-row flex list-none justify-between no-underline self-center    ">
<li className="text-black hidden md:inline-block text-2xl font-semibold capitalize ml-7 hover:text-blue-400">
        <Link href="/">
          <a>Accueil</a>
        </Link>
      </li>
      <li className="text-black hidden md:inline-block  text-2xl font-semibold capitalize ml-7 hover:text-blue-400">
        <Link href="/forum">
          <a>Forum</a>
        </Link>
      </li>
      {/* <li className="text-black hidden md:inline-block text-2xl font-semibold capitalize ml-7 hover:text-blue-400">
        <Link href="/section">
          <a>section</a>
        </Link>
      </li> */}
      <li className="text-black hidden md:inline-block text-2xl font-semibold capitalize ml-7 hover:text-blue-400">
        <Link href="/about">
          <a>a propos</a>
        </Link>
      </li>
      {userInfo.isAdmin ? <li className="text-black hidden md:inline-block text-2xl font-semibold capitalize ml-7 hover:text-blue-400">
        <Link href="/admin">
          <a>admin</a>
        </Link>
      </li> : ''}
      {userInfo.Email ? <li className="text-black hidden md:inline-block text-2xl font-semibold capitalize ml-7 hover:text-blue-400">
        <Link href="/profile">
          <a>profil</a>
        </Link>
      </li> : ''}
</ul>
{userInfo.Email ? (<div className="hidden md:flex flex-row items-center"> <img className="rounded-full h-12 w-12 " src={userInfo.imgURL} /> <p className=" ml-2 font-semibold text-black">{userInfo.UserName}</p> <p onClick={logoutHandler} className=" ml-6 inline-block py-3 px-5 mr-4 leading-none text-center text-black  bg-Blue-200 hover:bg-blue-400 hover:text-white font-semibold cursor-pointer rounded  shadow"> se deconnecter</p>  </div> ) :( <div className="bg-blue-700 md:flex text-white hidden  px-4 py-3 rounded-md  shadow-2xl w-48   items-center justify-center mr-4 hover:bg-blue-900 cursor-pointer">
    <p className="  capitalize text-xl font-bold">
      <Link href="/login" >
      se connecter
      </Link>
      </p>
</div>) }

<div className="  bg-blue-700 flex justify-center items-center  px-4 py-3 mr-7 cursor-pointer hover:bg-blue-800 rounded-sm md:hidden" onClick={changeNav}>
  {!open ? <MdOutlineMenu className="w-6 h-6 text-white font-bold" /> : <MdClose className="w-6 h-6 text-white font-bold" /> }
   
</div>
        </nav>
    )
} 
