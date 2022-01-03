import {useState} from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import NavBar from "../components/NavBar"
import {AiOutlineArrowRight} from 'react-icons/ai'
import Link from 'next/link'
import HomeStyles  from "../public/css/home.module.css"
import {BsFillShieldLockFill} from 'react-icons/bs'
import {MdOutlinePhoneAndroid,MdNetworkWifi} from 'react-icons/md'
import {FaRobot,FaDatabase} from 'react-icons/fa'
import SecondNavBar from '../components/SecondNavBar'
import Section from '../components/Section'

import Carousel from '../components/Carousel'
export default function Home() {
  const [open,setOpen] = useState(false);
  const changeNavStatus = () =>{
      setOpen(!open)
  }
  return (
    <div className={ ` flex flex-col  overflow-hidden  ` }>
      <Head>
        <title>Site du club informatique de l'ESATIC</title>
        <link rel="icon" href="/image/React-icon.svg.png" />
      </Head>
      <NavBar openNav={open} changeNav= {changeNavStatus}  />
        { open ? <SecondNavBar /> : ''  }
    <div className="h-screen relative mb-24 flex flex-col justify-center" >
      <p className="absolute text-2xl md:text-4xl ml-4 uppercase font-extrabold text-white">BIENVENUE SUR LE SITE DU CLUB <br/>
INFoRMATIQUE DE L'ESATIC.</p>
<p className="absolute text-xl md:text-4xl ml-4 mt-32 capitalize italic font-extrabold text-white">Ensemble numerisons la cote d'ivoire.</p>
<div className="bg-yellow-500 text-white absolute px-4 py-4 ml-6 mt-64 rounded-full  shadow-2xl w-64 flex items-center justify-center mr-4 hover:bg-yellow-900 cursor-pointer">
  <p className="capitalize text-xl font-bold"> <Link href="/about"  >
  <a>Decouvrez nous</a>
      
      </Link> </p> <AiOutlineArrowRight className="w-4 h-4 ml-6" /> </div>
<img src="/image/banner.png"  className="h-screen w-screen object-cover" />
    </div>

{/* bref introductiondu club informatique */}
<h1 className="  text-2xl md:text-4xl text-center font-semibold mb-5 text-black uppercase underline">Breve introduction de l'ESATIC </h1>
<div className="  flex flex-col md:grid md:grid-cols-2 gap-x-7 mb-8">
<div className="rounded-lg">
  <img src="/image/ecole.jpg" className="rounded-lg md:ml-3 mr-4 shadow-xl" />
</div>
<div>
  <p className="text-blue-800 mt-12 capitalize font-semibold text-2xl md:text-left text-center">A propos de l'ESATIC</p>
  <p className="text-gray-500 font-semibold text-xl mt-4 md:text-left text-center ">Esatic (Ecole Superieure Africaine des Telecommunications) est une ecole créée en 2012 <br/>
  dans le but de relever le defi de la digitalisation de la cote d'ivoire.
  </p>
  <div className="flex md:justify-start justify-center">
  <div className="bg-blue-700  text-white  self-center md:self-start mt-4 text-center   px-3 py-3 rounded-md  shadow-2xl w-64 md:flex items-center justify-center mr-4 hover:bg-blue-900 cursor-pointer">
    <p className="  capitalize text-xl font-bold">
      <Link href="https://esatic.ci/" >
      Visiter le site officiel
      </Link>
      </p> 
</div>
</div>
</div>
</div>

    {/* presentation breve des sections */}
    <h1 className="  text-2xl md:text-4xl font-semibold mb-5 text-black italic text-center">Decouvrez nos sections </h1>

    <div className="h-auto  mb-5 flex flex-wrap items-center w-full 	md:place-items-center  md:grid md:grid-cols-3 gap-8  justify-center " >
  <Section name="web developement" />
  <div  className={` ${HomeStyles.sectionBg}  transform hover:-translate-y-4 hover:transition duration-300 cursor-pointer flex flex-col  w-72 items-center rounded-lg shadow-lg break-words p-5` }>
            <h1 className="font-bold text-white uppercase "> mobile developement</h1>
            <MdOutlinePhoneAndroid    className="w-16 h-16 text-green-600 " />
            <p className="text-white font-semibold">Le développement d'applications mobiles est l'acte ou le processus par lequel une application mobile est développée pour les appareils mobiles, tels que les assistants numériques personnels, les assistants numériques d'entreprise ou les téléphones mobiles</p>
            <div className="bg-blue-700 text-white   px-4 py-3 rounded-md  shadow-2xl w-48 md:flex items-center justify-center mr-4 hover:bg-blue-900 cursor-pointer">
    <p className="  capitalize text-xl font-bold">
      <Link href="/login" >
      en savoir plus
      </Link>
      </p>
</div>
        </div>
        <div  className={` ${HomeStyles.sectionBg}  transform hover:-translate-y-4 hover:transition duration-300 cursor-pointer flex flex-col  w-72 items-center rounded-lg shadow-lg break-words p-5` }>
            <h1 className="font-bold text-white uppercase ">Intelligence artificielle</h1>
            <FaRobot    className="w-16 h-16 text-red-600 " />
            <p className="text-white font-semibold"> L'intelligence artificielle est « l'ensemble des théories et des techniques mises en œuvre en vue de réaliser des machines capables de simuler l'intelligence humaine ». Elle englobe donc un ensemble de concepts et de technologies, plus qu'une discipline autonome constituée.</p>
            <div className="bg-blue-700 text-white   px-4 py-3 rounded-md  shadow-2xl w-48 md:flex items-center justify-center mr-4 hover:bg-blue-900 cursor-pointer">
    <p className="  capitalize text-xl font-bold">
      <Link href="/login" >
      en savoir plus
      </Link>
      </p>
</div>
        </div>
  
        <div  className={` ${HomeStyles.sectionBg}  transform hover:-translate-y-4 hover:transition duration-300 cursor-pointer flex flex-col  w-72 items-center rounded-lg shadow-lg break-words p-5` }>
            <h1 className="font-bold text-white uppercase ">Internet des objets</h1>
            <MdNetworkWifi   className="w-16 h-16 text-yellow-100 " />
            <p className="text-white font-semibold">L'Internet des objets ou IdO est l'interconnexion entre l'Internet et des objets, des lieux et des environnements physiques. L'appellation désigne un nombre croissant d'objets connectés à Internet permettant ainsi une communication entre nos biens dits physiques et leurs existences numériques.</p>
            <div className="bg-blue-700 text-white   px-4 py-3 rounded-md  shadow-2xl w-48 md:flex items-center justify-center mr-4 hover:bg-blue-900 cursor-pointer">
    <p className="  capitalize text-xl font-bold">
      <Link href="/login" >
      en savoir plus
      </Link>
      </p>
</div>
        </div>
        <div  className={` ${HomeStyles.sectionBg}  transform hover:-translate-y-4 hover:transition duration-300 cursor-pointer flex flex-col  w-72 items-center rounded-lg shadow-lg break-words p-5` }>
            <h1 className="font-bold text-white uppercase ">securite informatique</h1>
            <BsFillShieldLockFill   className="w-16 h-16 text-blue-300 " />
            <p className="text-white font-semibold">La sécurité des systèmes d’information ou plus simplement sécurité informatique, est l’ensemble des moyens techniques, organisationnels, juridiques et humains nécessaires à la mise en place de moyens visant à empêcher ..</p>
            <div className="bg-blue-700 text-red-100   px-4 py-3 rounded-md  shadow-2xl w-48 md:flex items-center justify-center mr-4 hover:bg-blue-900 cursor-pointer">
    <p className="  capitalize text-xl font-bold">
      <Link href="/login" >
      en savoir plus
      </Link>
      </p>
</div>
        </div>
        <div  className={` ${HomeStyles.sectionBg}  transform hover:-translate-y-4 hover:transition duration-300 cursor-pointer flex flex-col  w-72 items-center rounded-lg shadow-lg break-words p-5` }>
            <h1 className="font-bold text-white uppercase ">big data</h1>
            <FaDatabase   className="w-16 h-16 text-yellow-500 " />
            <p className="text-white font-semibold">Le big data /ˌbɪɡ ˈdeɪtə/, les mégadonnées ou les données massives, désigne les ressources d’informations dont les caractéristiques en termes de volume, de vélocité et de variété imposent l’utilisation de technologies et de méthodes analytiques particulières pour générer de la valeur, et qui dépassent en général les ... </p>
            <div className="bg-blue-700 text-white   px-4 py-3 rounded-md  shadow-2xl w-48 md:flex items-center justify-center mr-4 hover:bg-blue-900 cursor-pointer">
    <p className="  capitalize text-xl font-bold">
      <Link href="/l" >
      en savoir plus
      </Link>
      </p>
</div>
        </div>
    </div>
{/* presentation des partenaires du club informatique */}
<h1 className="  text-2xl md:text-4xl font-semibold mb-5 text-black italic text-center">Decouvrez nos partenaires </h1>
<div className="h-auto  flex-col items-center   md:flex-row flex justify-center mb-6 flex-wrap gap-2">
<div className=" w-[60%]  md:w-[30%] border-2 shadow-sm h-[30rem] flex flex-col justify-between  ">
  <img src="https://1.bp.blogspot.com/-et0DqA3CdqM/YGdAqGG2dQI/AAAAAAAAAyk/-aetfqGwcRAIxL_IOiwP6oEvzpqLasijgCLcBGAsYHQ/s1080/IMG-20210402-WA0009.jpg" className="h-64" />
  <h3 className="font-bold text text-2xl text-center uppercase">Afrogenius</h3>
  <p className="text-center font-semibold">Afrogenius est un site qui vous tient informer de tout les actualites qui concerne le monde informatique en afrique.</p>
  <div className="bg-black text-white text-center  px-4 py-3 rounded-md  shadow-2xl w-48 md:flex items-center justify-center mr-4 hover:bg-blue-900 cursor-pointer self-center mb-4">
  <Link href="https://www.afrogenius-science.com/"  >
      en savoir plus
      </Link>
      </div>
</div>
<div className=" w-[60%] md:w-[30%] border-2 shadow-sm h-[30rem] flex flex-col justify-between  ">
  <img src="data:image/png;base64,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" className="h-64" />
  <h3 className="font-bold text text-2xl text-center uppercase">Aduti</h3>
  <p className="text-center font-semibold">L'association des Dut en Informatique. Nous sommes des étudiants de L'Institut National Polytechnique Félix Houphouët-Boigny (INPHB) de Yamoussoukro.</p>
  <div className="bg-black text-white text-center  px-4 py-3 rounded-md  shadow-2xl w-48 md:flex items-center justify-center mr-4 hover:bg-blue-900 cursor-pointer self-center mb-4">
  <Link href="https://aduti.net/"  >
      en savoir plus
      </Link>
      </div>
</div>
<div className=" w-[60%] md:w-[30%] border-2 shadow-sm h-[30rem] flex flex-col justify-between  ">
  <img src="https://1.bp.blogspot.com/-et0DqA3CdqM/YGdAqGG2dQI/AAAAAAAAAyk/-aetfqGwcRAIxL_IOiwP6oEvzpqLasijgCLcBGAsYHQ/s1080/IMG-20210402-WA0009.jpg"  className="h-64"/>
  <h3 className="font-bold text text-2xl text-center uppercase">CID</h3>
  <p className="text-center font-semibold">Cellule d'Innovation et de Developement en abbrégé CID designe est un bureau composé de  l'elite des etudiants de l'ESATIC qui s'soccupe de la recherhe.</p>
  <div className="bg-black text-white text-center   px-4 py-3 rounded-md  shadow-2xl w-48 md:flex items-center justify-center mr-4 hover:bg-blue-900 cursor-pointer self-center mb-4">
  <Link href="/login"  >
      en savoir plus
      </Link>
      </div>
</div>
</div>
       {/* partie des citation relatives aux ICT */}   
       <h1 className="  text-2xl md:text-4xl font-semibold mb-5 text-black italic text-center">Quelques citations a savoir </h1>
  <Carousel />

  
    </div>
  )
}
