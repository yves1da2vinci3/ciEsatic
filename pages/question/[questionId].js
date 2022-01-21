import React,{ useRef,useState,useEffect} from 'react'
import {useRouter} from 'next/router'
import {FaImage, FaLine} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'
import httpClient from '../../utils/httpClient'
import userAtom from '../../recoil/Atoms/userAtom';
import {useRecoilValue} from 'recoil'
function QuestionDetail({fecthedQuestion}) {
  const config = {
    Headers: {
        "Content-Type" : "application/json"
    }
}
 const [comment,SetComment] = useState("")

  let userInfo = useRecoilValue(userAtom)
  const [Commentaires,setCommentaires] = useState([])
  useEffect(()=>{
    setCommentaires(fecthedQuestion.comments)
  },[])

  const CommentHandler = async () => {
    console.log(fecthedQuestion._id)
    let commentaire;
    const Username= userInfo.UserName
    const photoUrl = userInfo.imgURL
   const userId = userInfo._id
    commentaire = {
      Username : Username,
      photoUrl : photoUrl,
      comment : comment,
      CodeImage :coverImage,
      userId : userId,

   }

   httpClient.post(`question/${fecthedQuestion._id}/comments`,commentaire,config)
      setCommentaires(previousComments => [...previousComments,commentaire])
  }
  const [coverImage,setCoverImage] = useState('')
   const [show,setShow] = useState(false)
  const filePickRef = useRef()


    const fileUpload = (e) => {
     // creer un objet file reader
     const Reader = new FileReader();
     // si il existe
     if(e.target.files[0]){
         // lire 'image comme uen chaine de caracteres
         Reader.readAsDataURL(e.target.files[0])
     }

     Reader.onload = (readEvent) => {
         console.log(readEvent.target.result)
         setShow(true)
         setCoverImage(readEvent.target.result)
     }
    }

    const closeImage = () => {
  setShow(false)
    }

    const openImage = () => {
      filePickRef.current.click()
    }
    return (
        <div className="flex flex-col px-4 ">
             {/* <h1 classname="text-2xl font-extrabold text-center ">the questionId is  :  {questionId}</h1> */}
             {/* publication  */}
             <div className="flex flex-col   bg-white shadow-md  rounded-sm  mt-6 pb-5 px-2 ">
        <p className="text-gray-700 text-lg font-bold italic">{fecthedQuestion.Title}</p>
        <p className="text-gray-700">erreur recontré :</p>
        <div className="bg-gray-100  h-48 overflow-scroll ">
          <p className="w-full break-words">{fecthedQuestion.Description}</p>

        </div>
        <p className="text-gray-700">code associé :</p>
     <div className="h-96 overflow-y-scroll  flex flex-col">
        <img className="h-auto object-fill" src={fecthedQuestion.PhotoCode} />
        </div>
        <div className="bg-gray-700 text-white    rounded-full  w-20 h-12 md:h-12 flex items-center justify-center mr-4 hover:bg-gray-900 cursor-pointer mt-5">
    <p className="  capitalize text-sm font-bold">
    {fecthedQuestion.sectionType}
      </p>
</div>
       </div>

       {/* afficher tout les commenctaires */}
       <h1 className="text-black text-lg md:text-xl font-semibold uppercase mb-12 mt-12">Les commentaires</h1>
      <div className="flex flex-col h-auto mb-5">
        {Commentaires.length !== 0 ? Commentaires.map((commentaire)=>(
            <div className="flex flex-col border-b-2 border-gray-300">
            {/* commentaire */}
            <div className="bg-gray-100  h-auto  ">
            <p className="w-full break-words">{commentaire.comment}</p>

          </div>
          {commentaire.CodeImage ?  <div className="h-64 overflow-y-scroll  flex flex-col">
          <img className="h-auto object-fill" src={commentaire.CodeImage} />
          </div> : '' }

            {/* userimage et nom */}
            <div className="self-end flex  gap-x-4 items-center">
              <img className="rounded-full  w-10 h-10" src={commentaire.photoUrl} />
              <p>{commentaire.Username}</p>
            </div>
            </div>
       ) ) : <p>aucun commentaire actuellement ,soyez le premier a commenter</p> }



      </div>
       {/* pour faire un commentaire  */}
        <div className="flex  justify-center items-center bg-gray-200 pr-3 h-[10rem] ">
        <input type="file" onChange={fileUpload} className="hidden"  ref={filePickRef}  />
        <textarea required type="text" onChange={(e)=> SetComment(e.target.value)}   placeholder="veuillez entrer un commentaire " className="border-b-2  appearance-none block w-full py-3 px-4 leading-tight  h-[10rem] text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none l"/>
        {show ?        <div className="flex items-center justify-center relative  rounded-md self-end">
          <img src={coverImage}  className="w-20 h-12  rounded-md  "  />
          <ImCross className="fill-current text-red-400 absolute top-1 right-1 cursor-pointer"  onClick={closeImage} />
        </div> : " "}

        {!show ?  <FaImage onClick={openImage} className='w-6 h-6 cursor-pointer  ' /> : "" }

        </div>
        <div class="flex -mx-1 mb-4 mt-2 justify-center">
        <button disabled={userInfo.Email ? false : true} onClick={CommentHandler} class={ userInfo.Email ?"inline-block w-1/2 py-4 px-8 mx-1 leading-none text-white bg-blue-400 font-semibold hover:bg-blue-100 rounded" :"inline-block w-3/4 py-4 md:py-4 px-2 md:px-8 mx-1 leading-none text-white bg-gray-400 font-semibold  rounded"} >{userInfo.Email ? "Commenter" : 'reservé aux utilisateurs connectés'}</button>
      </div>
        </div>
    )
}

export default QuestionDetail


export async function getServerSideProps(context) {
  const { params } = context;
  const { questionId } = params;
  const res = await httpClient.get(`/question/${questionId}`)
  const fecthedQuestion = res.data
  // console.log(res.data)
  return {
    props: {
      fecthedQuestion
    }, // will be passed to the page component as props
  }
}
