
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import HomeStyles  from "../public/css/home.module.css"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import SwiperStyle from '../public/css/style.module.css'


// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination]);


export default function App() {
  
  
  
  return (
    <>
    <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
  "delay": 4500,
  "disableOnInteraction": false
}} pagination={{
  "clickable": true
}}  className={` ${SwiperStyle.swiper}`}>
  <SwiperSlide className={` ${SwiperStyle.swiper} w-full`}>
    <div  className={`flex  items-center h-80 w-full px-5 gap-x-1 md:gap-x-3 ${HomeStyles.chicBg}`} >
            <div className="flex flex-col">
              <h1 className=" text-sm md:text-2xl font-extrabold italic uppercase">"Les nouvelles technologies offrent de nouvelles voies pour l'expression de cette démocratie.Toutefois, deux menaces guettent : d'une part, l'inégalité des citoyens face au numérique, ce que l'on appelle la fracture numérique; et, d'autre part, le risque lié à l'utilisation de données publiques, ce que l'on appelle l'open data. "</h1>
              <div className="flex items-center text-yellow-500 gap-x-2">
              <span className="w-16 bg-yellow-300 h-2"></span>
              <p className="text-sm md:text-lg font-semibold ">David Lacombled</p>
              </div>
            </div>
            <img src="https://pbs.twimg.com/profile_images/771078005825347588/8g7ZSOGx_400x400.jpg" className=" h-28 w-28 md:h-72 md:w-72 rounded-full" />
       </div>
       </SwiperSlide>
  <SwiperSlide className={` ${SwiperStyle.swiper} w-full`}><div  className={`flex  items-center h-80 w-full px-5 gap-x-1 md:gap-x-3 ${HomeStyles.chicBg}`} >
            <div className="flex flex-col">
              <h1 className=" text-lg md:text-2xl font-extrabold italic uppercase">"L'intelligence artificielle est potentiellement plus dangereuse que les armes nucléaires."</h1>
              <div className="flex items-center text-yellow-500 gap-x-2">
              <span className="w-16 bg-yellow-300 h-2"></span>
              <p className="text-sm  md:text-lg font-semibold">Elon musk</p>
              </div>
            </div>
            <img src="data:image/jpeg;base64,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" className=" h-28 w-28 md:h-72 md:w-72 rounded-full" />
       </div></SwiperSlide>
  <SwiperSlide className={` ${SwiperStyle.swiper} w-full`}><div  className={`flex  items-center h-80 w-full px-5 gap-x-1 md:gap-x-3 ${HomeStyles.chicBg}`} >
            <div className="flex flex-col">
              <h1 className=" text-sm md:text-2xl font-extrabold italic uppercase">" Peu importe la situation, n'est pas peur d'être ambitieux dans tes objectifs. - ✔️ Ensuite il faut déterminer sur le moyen terme "C. Quel est l'intérêt de se laisser porter par la vie jusqu'à tes dernières heures ? La vie est beaucoup plus intéressante si tu te challenges et construis des choses !"</h1>
              <div className="flex items-center text-yellow-500 gap-x-2">
              <span className="w-16 bg-yellow-300 h-2"></span>
              <p className="text-sm  md:text-lg font-semibold">Sundar pichai</p>
              </div>
            </div>
            <img src="https://mobile-img.lpcdn.ca/lpca/924x/r3996/8419f671-1618-11ea-82bb-0eda3a42da3c.jpg" className=" h-28 w-28 md:h-72 md:w-72 rounded-full" />
       </div></SwiperSlide>
  <SwiperSlide className={` ${SwiperStyle.swiper} w-full`}><div  className={`flex  items-center h-80 w-full px-5 gap-x-1 md:gap-x-3 ${HomeStyles.chicBg}`} >
            <div className="flex flex-col">
              <h1 className=" text-lg md:text-2xl font-extrabold italic uppercase">"Soyez gentil avec les geeks. L’un d’eux pourrait devenir votre patron "</h1>
              <div className="flex items-center text-yellow-500 gap-x-2">
              <span className="w-16 bg-yellow-300 h-2"></span>
              <p className="text-sm  md:text-lg font-semibold">Bill gates</p>
              </div>
            </div>
            <img src="http://abidjantv.net/wp-content/uploads/2021/10/Bill-Gates.jpeg" className=" h-28 w-28 md:h-72 md:w-72 rounded-full" />
       </div></SwiperSlide>
  <SwiperSlide className={` ${SwiperStyle.swiper} w-full`}><div  className={`flex  items-center h-80 w-full px-5 gap-x-1 md:gap-x-3 ${HomeStyles.chicBg}`} >
            <div className="flex flex-col">
              <h1 className=" text-lg md:text-2xl font-extrabold italic uppercase">" Tout le monde dans ce pays devrait apprendre à programmer un ordinateur, parce que ça vous apprend à penser "</h1>
              <div className="flex items-center text-yellow-500 gap-x-2">
              <span className="w-16 bg-yellow-300 h-2"></span>
              <p className="text-sm  md:text-lg font-semibold">Steve Jobs</p>
              </div>
            </div>
            <img src="https://www.243tech.com/ce-que-je-retiens-du-discours-de-steve-jobs-aux-etudiants-de-stanford/steve_jobs.jpg" className=" h-28 w-28 md:h-72 md:w-72 rounded-full" />
       </div></SwiperSlide>
  <SwiperSlide className={` ${SwiperStyle.swiper} w-full`}><div  className={`flex  items-center h-80 w-full px-5 gap-x-1 md:gap-x-3 ${HomeStyles.chicBg} `} >
            <div className="flex flex-col break-words">
              <h1 className=" text-sm md:text-2xl font-extrabold italic uppercase">En fait, à cause des nouvelles technologies, mon studio complet est sur mon ordinateur portable. Et j'ai un petit clavier dans mon sac. Je peux faire en sorte que tout ce que je fasse vienne de mon ordinateur portable. Même quand je vais dans un grand studio, je ne fais que brancher mes ordinateurs portables. "</h1>
              <div className="flex items-center text-yellow-500 gap-x-2">
              <span className="w-16 bg-yellow-300 h-2"></span>
              <p className="text-sm  md:text-lg font-semibold">David Guetta</p>
              </div>
            </div>
            <img src="https://yt3.ggpht.com/ytc/AKedOLSkHrWRNRk5A6TzoE_KqkcBsTwfday_ScHXJqkSkQ=s900-c-k-c0x00ffffff-no-rj" className=" h-28 w-28 md:h-72 md:w-72 rounded-full" />
       </div></SwiperSlide>

  </Swiper>
    </>
  )
}