import React, { useState,useEffect }from 'react'
import Head from 'next/head'
import {FaTag,FaQuestion, FaPen} from 'react-icons/fa'
import httpClient from '../utils/httpClient'
import Question from '../components/Question.js'
import UserQuestions from "../components/UserQuestions"
import Link from 'next/link'
import userAtom from '../recoil/atoms/userAtom';
import {useRecoilValue} from 'recoil'
function forum({fecthedQuestions}) {
  let userInfo = useRecoilValue(userAtom)
  const config = {
    Headers: {
        "Content-Type" : "application/json"
    }
}
    const [option,setOption] = useState(1)  

    const [Questions,setQuestions] = useState([])
    const [userQuestions,setUserQuestions] = useState([])
    useEffect(()=>{
      setQuestions(fecthedQuestions)
    },[])
    useEffect( ()=>{
       httpClient.get(`/question/question/${userInfo._id}`).then(res => {
        setUserQuestions(res.data)
        console.log(userQuestions)
       }).catch(err =>console.log(err))
    },[])

    // FONCTIONALITES POUR LES REQUETES PAR CATEGORIE
const searchByWebCategory =  async () => {
  const category = 'web'
  const res = await httpClient.post(`question/category`,{category},config)
  setQuestions(res.data)
}
const searchByIACategory =  async () => {
  const category = 'IA'
  const res = await httpClient.post(`question/category`,{category},config)
  setQuestions(res.data)
}
const searchByIOTCategory =  async () => {
  const category = 'IOT'
  const res = await httpClient.post(`question/category`,{category},config)
  setQuestions(res.data)
}
const searchBysecuritéCategory =  async () => {
  const category = 'securité'
  const res = await httpClient.post(`question/category`,{category},config)
  setQuestions(res.data)
}
const searchBybigDataCategory =  async () => {
  const category = 'big data'
  const res = await httpClient.post(`question/category`,{category},config)
  setQuestions(res.data)
}
const searchBymobileCategory =  async () => {
  const category = 'mobile'
  const res = await httpClient.post(`question/category`,{category},config)
  setQuestions(res.data)
}
const BringAllArticles =  async () => {
  const res = await httpClient.get('/question')
  setQuestions(res.data)
}
    // FIN DE LA FONCTIONALITES DE RECHERHCHE PAR CATEGORIE
    const SearchHandler = async (e)=>{
  let keyword = e.target.value
     const res = await httpClient.get(`question?keyword=${keyword}`)
     setQuestions(res.data)
    }
    // changer  options modulesconst  changeOptions = (e) => {
        const  changeOptions = (e) => {
            const dataOptions = e.target.parentNode.getAttribute('data-options') ?  e.target.parentNode.getAttribute('data-options') : e.target.parentNode.parentNode.getAttribute('data-options')
            const optionsId = parseInt(dataOptions)
           setOption(optionsId)
          }
    return (
      
        <div className="flex flex-row h-auto">
                     <Head>
        <title>forum|club Informatique de l'esatic</title>
        <link rel="icon" href="/image/React-icon.svg.png" />
      </Head>
            {/* main part */}
      
          {/* sidebar */}
          <div className="flex flex-col flex-[1] text-center items-center   mr-2 border-r-2 border-gray-400">
          <h1 className="   text-black  text-lg md:text-2xl capitalize font-bold mt-4">Options </h1>

          <ul className=" h-full list-none flex flex-col  mt-8 self-center justify-start   ">
            <li className= {option ==1 ? " cursor-pointer flex flex-row  w-full items-center  my-8   text-blue-500"  : " cursor-pointer flex flex-row  w-full items-center text-gray-600 my-8  hover:text-blue-500  " } onClick={changeOptions}  data-options="1" > <FaTag className='w-6 h-6' /> <p className=' hidden md:inline-block ml-4   capitalize font-semibold' > Partie principale </p> </li>
            <li className= {option ==2 ? " cursor-pointer flex flex-row  w-full items-center  my-8   text-blue-500"  : " cursor-pointer flex flex-row  w-full items-center text-gray-600 my-8  hover:text-blue-500  " }  onClick={changeOptions} data-options="2"> <FaQuestion className='w-6 h-6 ' /> <p className='hidden md:inline-block ml-4  capitalize     font-semibold' >questions posées</p> </li>


          </ul>
          </div>
              {/* options */}
      
              {option ===1 ? ( <div className={`flex flex-col flex-[3]     `} >
              <img src="/image/Forumbanner.png"  className=" object-cover" />
              <div className="relative md:block  self-center mt-4">
          <input  onChange={SearchHandler} placeholder="entrer un mot clé " className="rounded-full py-3 pl-12 pr-5 text-gray-300 font-heading font-medium text-base focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 outline-none border-2 w-[30rem]" />
        </div>
             
 <p className="text-center mt-6 font-bold"> vous pouvez choisir un tag parmi ceux qui sont ci dessous  pour avoir les questions relatives à ce tag</p>
       {/* tags et boutton pour poser de questions */}
  <div className="flex  flex-row w-full gap-x-4 px-6 justify-between mt-8 items-center">
                                {/* tags */}

    <div className="flex  flex-row">
    <div onClick={searchByWebCategory} className="bg-gray-700 text-white    rounded-full  w-20 h-8 flex items-center justify-center mr-4 hover:bg-gray-900 cursor-pointer">
    <p className="  capitalize text-sm font-bold">
     web
      </p>
</div>
<div onClick={searchByIACategory} className="bg-gray-700 text-white    rounded-full  w-20 h-8 flex items-center justify-center mr-4 hover:bg-gray-900 cursor-pointer">
    <p className="  capitalize text-sm font-bold">
     IA
      </p>
</div>
<div  onClick={searchByIOTCategory} className="bg-gray-700 text-white    rounded-full  w-20 h-8 flex items-center justify-center mr-4 hover:bg-gray-900 cursor-pointer">
    <p className="  capitalize text-sm font-bold">
      IOT
      </p>
</div>
<div onClick={searchBysecuritéCategory} className="bg-gray-700 text-white    rounded-full  w-20 h-8 flex items-center justify-center mr-4 hover:bg-gray-900 cursor-pointer">
    <p className="  capitalize text-sm font-bold">
    securité
      </p>
</div>
<div  onClick={searchBybigDataCategory} className="bg-gray-700 text-white    rounded-full  w-20 h-8 flex items-center justify-center mr-4 hover:bg-gray-900 cursor-pointer">
    <p className="  capitalize text-sm font-bold">
      big data
      </p>
</div>
<div onClick={searchBymobileCategory} className="bg-gray-700 text-white    rounded-full  w-20 h-8 flex items-center justify-center mr-4 hover:bg-gray-900 cursor-pointer">
    <p className="  capitalize text-sm font-bold">
      mobile
      </p>
</div>
<div onClick={BringAllArticles} className="bg-gray-700 text-white    rounded-full  w-20 h-8 flex items-center justify-center mr-4 hover:bg-gray-900 cursor-pointer">
    <p className="  capitalize text-sm font-bold">
     tout
      </p>
</div>
    </div>

                                {/* boutton for question */}
                                {userInfo.Email ? <Link href="/ask">
<a >
<div className="bg-blue-700 text-white  w-[10rem]  md:w-[16rem] h-14  flex rounded-full   items-center justify-center mr-4 hover:bg-blue-900 cursor-pointer">
    <p className="  capitalize text-sm md:text-lg font-bold">
      poser  une question
      </p>
</div>
</a>
 </Link> : ""}


  </div>
                                     {/* list of question */}
  <div className="flex flex-col w-full mt-7 gap-y-4 mr-1">
  {/* { fecthedQuestions ?  (fecthedQuestions.map((question)=> (<Question Description={question.Description}  category={question.sectionType} numComments={question.numComments} />)))   : "aucune question pour l'instant" } */}

{ Questions.length !== 0 ?  (Questions.map((question)=> (<Question key={question._id} Description={question.Description} questionId={question._id}  category={question.sectionType} numComments={question.numComments} />)))   :  <h1 className="text-2xl text-center mt-7 mb-6">aucune question pour l'instant ou aucune question correspondante a votre recherche</h1> }
  </div>

 
  </div>
    ) : ""}
    {/* //  partie questions posées */}
      {option === 2 ? ( userQuestions.length !== 0 ? <div className="grid  grid-cols-1  sm:grid-cols-2  md:grid-cols-3  flex-[3] h-auto  mt-1 "> 
 {userQuestions.map(question =>(<UserQuestions key={question._id}  date={question.publishedDate}  Title={question.Title} description={question.Description} userQuestionId={question._id} />))}
      </div>
            : <div className='flex justify-center items-center h-screen w-9/12' >aucune question pour l'instant</div>
      ): ""}
        </div>
    )
}

export default forum

export async function getServerSideProps(context) {
  // console.log(Cookies.get('userInfo'))
  // let userInfo = JSON.parse(Cookies.get('userInfo'))
  // const userId = userInfo._id
  const res1 = await httpClient.get('/question')
  const fecthedQuestions = res1.data
  // const res2 = await httpClient.get(`/question/question/${userId}`)
  return {
    props: {
      fecthedQuestions
    }, // will be passed to the page component as props
  }
}