import React from 'react'
import {FaRegEye,FaTrash} from 'react-icons/fa'

function UserQuestions() {
    // const history = useHistory();
    //  const ViewHandler =  () => {
    //   history.push(`/article/${articleId}`)
    //  }
    // //  const updateHandler =  () => {
    // //   history.push(`/write/${articleId}`)
    // //  }
    //  const deleteHandler = async () => {
    //    let confirmBool ;
    //     confirmBool =  window.confirm('etes vous sur de vouloir supprimer ?') 
    //     if(confirmBool) {
    //       axios.delete(`${dns}/api/articles/${articleId}`)
    //     }
    //     history.push('/')
    //  }
    return (
        <div className="w-full  px-4 mb-8  cursor-pointer ">
        <div className="p-6 bg-blue-200 rounded-lg shadow-md transform hover:-translate-y-2 hover:transition duration-300 " >
        
          <span className="inline-block text-xs font-bold text-blue-500">12/12/2021</span>
          <h2 className="mb-2 text-2xl font-bold font-heading">what are boyz is that</h2>
          <p className="mb-4 text-lg text-gray-500 leading-loose">je suis un  king , je vais devenir un monstre si ca continue</p>
        <div className="flex flex-row" >
        <FaRegEye className="h-6 w-6 mr-4 hover:fill-current hover:text-green-600 " />
       <FaTrash className="h-6 w-6 hover:fill-current hover:text-red-600" />
        </div>
        </div>
      </div>
    )
}

export default UserQuestions
