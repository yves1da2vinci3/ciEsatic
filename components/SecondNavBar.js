import React from 'react'
import Link from 'next/link'
function SecondNavBar() {
    return (
        <nav className="bg-transparent  font-sans w-full  flex flex-col  h-52 py-4 items-start justify-between z-40 mt-0 pl-4"   >
   
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
      <li className="text-black self-start   text-lg font-semibold italic  ml-7 hover:text-blue-400">
        <Link href="/section">
          <a>section</a>
        </Link>
      </li>
      <li className="text-black   text-lg font-semibold italic  ml-7 hover:text-blue-400">
        <Link href="/about">
          <a>a propos</a>
        </Link>
      </li>
</ul>
<div className="bg-blue-700 text-white   self-start px-1 py-3 rounded-md  shadow-2xl w-28 flex items-center justify-center mr-4 hover:bg-blue-900 cursor-pointer">
    <p className="  italic  text-md font-bold">
      <Link href="/login" >
      se connecter
      </Link>
      </p>
</div>
        </nav>
    )
}

export default SecondNavBar
