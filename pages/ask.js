import React ,{ useState ,useRef,useEffect}from 'react'
import httpClient from '../utils/httpClient'
import userAtom from '../recoil/atoms/userAtom';
import {useRecoilValue} from 'recoil'
import {useRouter} from 'next/router'
function ask() {
const router = useRouter()
  let userInfo = useRecoilValue(userAtom)

  console.log(userInfo)

    const [Title,setTitle] = useState("Why do we use it?")
    const [sectionType,setsectionType] = useState("web")
    const [Description,setDescription] = useState("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).")
    const  selectHandler = (e)  =>{
   
        setsectionType(e.target.value)
   }


  
    const [PhotoCode,SetPhotoCode] = useState("https://www.pierre-giraud.com/wp-content/uploads/2019/05/javascript-code-element-script-html.png")
    const filePickRef = useRef(null);
    const addImageToPost = (e) =>{
        // creer un objet file reader
    const Reader = new FileReader();
    // si il existe
    if(e.target.files[0]){
        // lire 'image comme uen chaine de caracteres
        Reader.readAsDataURL(e.target.files[0]) 
    }

    Reader.onload = (readEvent) => {
        console.log(readEvent.target.result)
        SetPhotoCode(readEvent.target.result)
    }
  }
  
      const SubmitHandler = () =>{
      const writter = userInfo.UserName
      const userId = userInfo._id
      const userImgUrl = userInfo.imgURL
        const question ={
          writter,
          userImgUrl,
          Title,
          PhotoCode,
          Description,
          userId,
          sectionType
        }
        const config = {
          Headers: {
              "Content-Type" : "application/json"
          }
      }
      httpClient.post('/question',question,config).then(()=>{
router.push('/')
      }).catch(err => console.log(err))
      }
    return (
        <div className="flex flex-col p-5 h-auto md:h-screen">
        <div className="md:grid grid-cols-2 flex flex-col  gap-x-2 h-full  ">
            {/* la ou la question est posée  */}
       <div className="flex flex-col h-4/5  bg-white shadow-md  rounded-sm  mt-6 pb-5 px-2">
<p className="text-black text-center font-extrabold uppercase ">Formulaire de renseignement</p>
<div className="mb-4 mt-3">
      <input onChange={(e) => setTitle(e.target.value)} required className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="text" placeholder="veuillez entrer le titre"/>
    </div>
        <textarea  onChange={(e) => setDescription(e.target.value)} placeholder="copier votre erreur ici" className="h-72 md:mt-4 mt-1 block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none">          
        </textarea>
        <p className='md:text-lg text-sm'>veuillez joindre la photo du code correspondant a cette erreur(cliquer sur la croix)</p>
        <div  onClick={()=> filePickRef.current.click() } className="mb-4 cursor-pointer flex justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<input className="hidden" type="file" ref={filePickRef} onChange={addImageToPost} />
        <img className=" h-80 w-full" src={PhotoCode} />
      </div>        <p>selectionner la categorie de la question</p>
        <select  onChange={ selectHandler }  name="category" className=" block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none">selectioner  votre categore 
     <option value="web">web</option>
                    <option value="IA">IA</option>
                    <option value="IOT">  IOT</option>
                    <option value="securité">  securité</option>
                    <option value="big data"> big data</option>
                    <option value="mobile">   mobile</option>
     </select>
       </div>

       {/* la ou on a l'aprecu */}
       <div className="flex flex-col h-4/5  bg-white shadow-md  rounded-sm  mt-6 pb-5 px-2 justify-between ">
        <p className="text-black text-center font-extrabold uppercase">Appercu  final : </p>
        <p className="text-gray-700 text-lg font-bold italic">{Title}</p>
        <p className="text-gray-700">erreur recontré :</p>
        <div className="bg-gray-100  h-48 overflow-scroll ">
          <p className="w-full break-words">{Description}</p>

        </div>
        <p className="text-gray-700">code associé :</p>
        <div className="h-64 overflow-y-scroll  flex flex-col">
        <img className="h-auto object-fill" src={PhotoCode}/>
        </div>
        <div className="bg-gray-700 text-white    rounded-full  w-20 h-12 md:h-12 flex items-center justify-center mr-4 hover:bg-gray-900 cursor-pointer mt-5">
    <p className="  capitalize text-sm font-bold">
   {sectionType}
      </p>
</div>
       </div>
         <div>
              </div>
        </div>
        <div onClick={SubmitHandler}  className=" mt-8 bg-blue-700 text-white self-center  text-center px-4 py-4  rounded-lg my-2  w-48 flex items-center justify-center mr-4 hover:bg-blue-900 cursor-pointer">
    <p className="  capitalize text-xl font-bold">
      
   valider

      </p>
</div>
        </div>
    )
}

export default ask
