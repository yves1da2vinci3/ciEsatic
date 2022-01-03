import React,{ useState} from 'react'
import SecondNavBar from '../components/SecondNavBar'
import NavBar from "../components/NavBar"
import {AiFillHeart} from 'react-icons/ai'
import HomeStyles  from "../public/css/home.module.css"
import Head from 'next/head'
function about() {
    const [open,setOpen] = useState(false);
    const changeNavStatus = () =>{
        setOpen(!open)
    }
    return (
        <div className="flex flex-col w-full ">
             <Head>
        <title>A propos|club Informatique de l'esatic</title>
        <link rel="icon" href="/image/React-icon.svg.png" />
      </Head>
            <NavBar openNav={open} changeNav= {changeNavStatus}  />
        { open ? <SecondNavBar /> : ''  }

        <div  className={`  w-[4/7]  md:h-[30rem] md:w-full flex items-end md:items-center justify-center   ${HomeStyles.aboutBg} `}>
          <div className="  md:h-80 w-3/5  flex  flex-row">
              <div className={`h-128 ${HomeStyles.chicBg1} w-full md:flex items-center justify-center flex-col shadow-md hidden`}>
                 <h1 className=" text-sm  text-center md:text-xl uppercase font-extrabold text-white">L'informatique,notre passion.</h1>
                 <AiFillHeart  className=" fill-current text-white w-48 h-48  " />
              </div>
              <div className=" h-[30rem]  md:h-80 bg-white w-full flex items-center justify-center flex-col  px-3">
                  <h1 className="text-xl uppercase font-extrabold">Notre philosophie </h1>
                  <p className="text-lg font-thin">Seul on avance plus vite ,mais ensemble on va plus loin,partager notre savoir plus qu'un plaisir, une manière de penser et de vivre</p>
                  <h1 className="text-xl uppercase font-extrabold">Notre Mission </h1>
                  <p className="text-lg font-thin">Depuis sa création, l'objectif de ce club est de batir une jeunesse dynamique ,passioné par ce qu'elle fait,ainsi rélever le defi de la digitalisation de la cote d'ivoire.'</p>
              </div>
          </div>
        </div>

        <div className={` flex flex-col  items-center `}>
             <h1 className="text-center text-sm md:text-2xl text-white uppercase font-extrabold mt-4 absolute ">Anciens Presidents  du club informatique</h1>
             <img src="/image/original.png"  className="h-96 md:h-full w-full"/>
          
        </div>
        </div>
    )
}

export default about
