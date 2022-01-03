import Image from 'next/image'
import Link from 'next/link'
import {MdOutlineMenu,MdClose} from 'react-icons/md'

export default  function NavBar ({openNav,changeNav}) {
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
      <li className="text-black hidden md:inline-block text-2xl font-semibold capitalize ml-7 hover:text-blue-400">
        <Link href="/section">
          <a>section</a>
        </Link>
      </li>
      <li className="text-black hidden md:inline-block text-2xl font-semibold capitalize ml-7 hover:text-blue-400">
        <Link href="/about">
          <a>a propos</a>
        </Link>
      </li>
</ul>
<div className="bg-blue-700 text-white hidden  px-4 py-3 rounded-md  shadow-2xl w-48 md:flex items-center justify-center mr-4 hover:bg-blue-900 cursor-pointer">
    <p className="  capitalize text-xl font-bold">
      <Link href="/login" >
      se connecter
      </Link>
      </p>
</div>
<div className="bg-blue-700 flex justify-center items-center  px-4 py-3 mr-7 cursor-pointer hover:bg-blue-800 rounded-sm md:hidden" onClick={changeNav}>
  {!open ? <MdOutlineMenu className="w-6 h-6 text-white font-bold" /> : <MdClose className="w-6 h-6 text-white font-bold" /> }
   
</div>
        </nav>
    )
} 
