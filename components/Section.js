import React from 'react'
import {FaReact}  from 'react-icons/fa'
import Link from 'next/link'
import HomeStyles  from "../public/css/home.module.css"
function Section({name,Icon}) {
    return (
        <div  className={` ${HomeStyles.sectionBg}  transform hover:-translate-y-4 hover:transition duration-300 cursor-pointer flex flex-col  gap-y-8 w-96 items-center rounded-lg shadow-lg break-words p-5` }>
            <h1 className="font-bold text-white uppercase "> {name}</h1>
            <FaReact    className="w-16 h-16 text-white " />
            <p className="text-white font-semibold"> Le World Wide Web, la toile mondiale ou la toile, est un système hypertexte public fonctionnant sur Internet. Le Web permet de consulter, avec un navigateur, des pages accessibles sur des sites. L’image de la toile d’araignée vient des hyperliens qui lient les pages web entre elles.</p>
            <div className="bg-blue-700 text-white   px-4 py-3 rounded-md  shadow-2xl w-48 md:flex items-center justify-center mr-4 hover:bg-blue-900 cursor-pointer">
    <p className="  capitalize text-xl font-bold">
      <Link href="/login" >
      en savoir plus
      </Link>
      </p>
</div>
        </div>
    )
}

export default Section
