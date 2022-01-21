import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import userAtom from '../recoil/Atoms/userAtom'
import {useRecoilState} from 'recoil'
import Cookies  from 'js-cookie'
function SecondNavBar() {
  const [userInfo,setUserinfo] = useRecoilState(userAtom)
  const router = useRouter()

  
const logoutHandler = () =>{
  setUserinfo({})
  Cookies.remove("userInfo");
  router.push('/login')
}
    return (
        <nav className="bg-transparent  font-sans w-full  flex flex-col  h-[20rem] py-4 items-start justify-between z-40 mt-0 pl-4"   >
   
    <ul className="flex-col flex list-none justify-between no-underline    ">
<li className="text-black  self-start  text-lg font-semibold italic  ml-7 hover:text-blue-400">
        <Link href="/">
          <a>Accueil</a>
        </Link>
      </li>
      <li className="text-black self-start    text-lg font-semibold italic  ml-7 hover:text-blue-400">
        <Link href="/forum">
          <a>Forum</a>
        </Link>
      </li>
      {/* <li className="text-black self-start   text-lg font-semibold italic  ml-7 hover:text-blue-400">
        <Link href="/section">
          <a>section</a>
        </Link>
      </li> */}
      <li className="text-black   text-lg font-semibold italic  ml-7 hover:text-blue-400">
        <Link href="/about">
          <a>a propos</a>
        </Link>
      </li>
      {userInfo.isAdmin  ? <li className="text-black   text-lg font-semibold italic  ml-7 hover:text-blue-400">
        <Link href="/admin">
          <a>admin</a>
        </Link>
      </li> : ''}
      {userInfo.Email ? <li className="text-black   text-lg font-semibold italic  ml-7 hover:text-blue-400">
        <Link href="/profile">
          <a>profil</a>
        </Link>
      </li> : ''}
</ul>
{userInfo.Email ? (<div className="flex flex-col items-center self-center "> <img className="rounded-full h-12 w-12 " src={userInfo.imgURL} /> <p className=" ml-2 font-semibold text-black">{userInfo.UserName}</p> <p onClick={logoutHandler} className=" ml-6 inline-block py-3 px-5 mr-4 leading-none text-center text-black  bg-Blue-200 hover:bg-blue-400 hover:text-white font-semibold cursor-pointer rounded  shadow"> se deconnecter</p>  </div> ) :<div className="bg-blue-700 text-white self-center text-center   px-4 py-3 rounded-md  shadow-2xl w-48 md:flex items-center justify-center mr-4 hover:bg-blue-900 cursor-pointer">
    <p className="  capitalize text-xl font-bold">
      <Link href="/login" >
      se connecter
      </Link>
      </p>
</div> }
        </nav>
    )
}

export default SecondNavBar
