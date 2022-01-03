import Image from 'next/image'
import Link from 'next/link'
export default function Footer () {

  return (
<footer className="flex flex-row  items-center justify-between w-full mb-0 h-24 border-t  bg-blue-900 ">
<Image className=" self-start" src="/image/Footer_logo.png" width={250} height={48} />
<ul className="flex-row flex list-none justify-between no-underline self-center  ">
<li className="text-white text-lg font-semibold capitalize ml-7 hover:text-gray-400">
        <Link href="/">
          <a>Accueil</a>
        </Link>
      </li>
      <li className="text-white text-lg font-semibold capitalize ml-7 hover:text-gray-400">
        <Link href="/forum">
          <a>Forum</a>
        </Link>
      </li>
      <li className="text-white text-lg font-semibold capitalize ml-7 hover:text-gray-400">
        <Link href="/section">
          <a>section</a>
        </Link>
      </li>
      <li className="text-white text-lg font-semibold capitalize ml-7 hover:text-gray-400">
        <Link href="/about">
          <a>a propos</a>
        </Link>
      </li>
</ul>
<p className="text-white font-bold mr-2 capitalize">@copyright 2021</p>
</footer>
  )
}

