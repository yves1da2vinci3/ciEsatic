import React from 'react'
import {FaRegEye,FaTrash} from 'react-icons/fa'
import {useRouter} from 'next/router'
import httpClient from '../utils/httpClient'
import userAtom from '../recoil/Atoms/userAtom';
import {useRecoilValue} from 'recoil'
function UserQuestions({date,Title,description,userQuestionId}) {
  let userInfo = useRecoilValue(userAtom)
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userInfo.token}`,
    },
  }
  const router= useRouter()
  const finalDescription = description.length > 250 ? description.substring(0,250) +"..." : description
     const ViewHandler =  () => {
     router.push(`/question/${userQuestionId}`)
     }
     const deleteHandler = async () => {
       let confirmBool ;
        confirmBool =  window.confirm('etes vous sur de vouloir supprimer ?') 
        if(confirmBool) {
          httpClient.delete(`/question/${userQuestionId}`,config)
        }
        router.push('/')
     }
    return (
        <div className="w-full  px-4 mb-8  cursor-pointer ">
        <div className="p-6 bg-blue-200 rounded-lg shadow-md transform hover:-translate-y-2 hover:transition duration-300 " >
        
          <span className="inline-block text-xs font-bold text-blue-500">{date}</span>
          <h2 className="mb-2 text-2xl font-bold font-heading">{Title}</h2>
          <p className="mb-4 text-lg text-gray-500 leading-loose">{finalDescription}</p>
        <div className="flex flex-row" >
        <FaRegEye onClick={ViewHandler} className="h-6 w-6 mr-4 hover:fill-current hover:text-green-600 " />
       <FaTrash onClick={deleteHandler} className="h-6 w-6 hover:fill-current hover:text-red-600" />
        </div>
        </div>
      </div>
    )
}

export default UserQuestions
