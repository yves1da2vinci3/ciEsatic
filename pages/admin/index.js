import React, { useState ,useEffect}from 'react'
import Head from 'next/head'
import {FaUser,FaRegQuestionCircle, FaPen, FaTrash} from 'react-icons/fa'
import UserQuestions from "../../components/UserQuestions"
import userAtom from '../../recoil/atoms/userAtom';
import {useRecoilValue} from 'recoil'
import httpClient from '../../utils/httpClient'
function index() {
    let userInfo = useRecoilValue(userAtom)
    const [users,setUsers] = useState([])
    const [userQuestions,setUserQuestions] = useState([])
    useEffect(() => {
        const config = {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${userInfo.token}`,
            },
          }
  httpClient.get('users',config).then(res =>{
      setUsers(res.data)
      console.log(res.data)
  }).catch(err => console.log(err))
    }, [])
    useEffect( ()=>{
        httpClient.get("/question").then(res => {
         setUserQuestions(res.data)
         console.log(userQuestions)
        }).catch(err =>console.log(err))
     },[])
    const [option,setOption] = useState(1)

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
<li className= {option ==1 ? " cursor-pointer flex flex-row  w-full items-center  my-8   text-blue-500"  : " cursor-pointer flex flex-row  w-full items-center text-gray-600 my-8  hover:text-blue-500  " } onClick={changeOptions}  data-options="1" > <FaUser className='w-6 h-6' /> <p className=' hidden md:inline-block ml-4   capitalize font-semibold' > Tout les utilisateurs </p> </li>
<li className= {option ==2 ? " cursor-pointer flex flex-row  w-full items-center  my-8   text-blue-500"  : " cursor-pointer flex flex-row  w-full items-center text-gray-600 my-8  hover:text-blue-500  " }  onClick={changeOptions} data-options="2"> <FaRegQuestionCircle className='w-6 h-6 ' /> <p className='hidden md:inline-block ml-4  capitalize     font-semibold' >Toutes les questions</p> </li>
</ul>
</div>
 {/* options */}

 {option ===1 ? ( <div className={`flex flex-col flex-[3]     `} >
    <table className="w-full">
        <thead className="bg-blue-800 p-4 h-12">
            <td className="text-white border-2 text-center">Email</td>
            <td className="text-white border-2 text-center">UserName</td>
            <td className="text-white border-2 text-center">numero </td>
            <td className="text-white border-2 text-center">type</td>
            <td className="text-white border-2 text-center">options</td>
        </thead>
        {users.map(user => (  <tr className="h-12">
        <td className="text-black border-2 text-center">{user.Email}</td>
            <td className="text-black border-2 text-center">{user.UserName}</td>
            <td className="text-black border-2 text-center">{user.phoneNumber} </td>
            <td className="text-black border-2 text-center">{user.Type}</td>
            <td className="text-black border-2 text-center flex items-center gap-x-2 justify-center h-12"><FaTrash className=" w-6 h-6 fill-current text-red-600 cursor-pointer" />   <FaPen className="fill-current text-green-600 cursor-pointer" /> </td>
        </tr>))}
      
      
    </table>


</div>
) : ""}
{/* //  partie questions posées */}

{option === 2 ? ( userQuestions.length !== 0 ? <div className="grid  grid-cols-1  sm:grid-cols-2  md:grid-cols-3  flex-[3] h-auto  mt-1 "> 
 {userQuestions.map(question =>(<UserQuestions  date={question.publishedDate}  Title={question.Title} description={question.Description} userQuestionId={question._id} />))}
      </div>
            : <div className='flex justify-center items-center h-screen w-9/12' >aucune question pour l'instant</div>
      ): ""}
{/* //  partie questions repondus */}


</div>
    )
}

export default index

