
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import Modal from "../Modal/Modal"
import Forma from "../Reddit/Reddit"


const Detail = ({id, title, text, img, tag, index}) => {
  const navigate = useNavigate()  
const [viewModal, setViewModal] = useState(false)
const [post, setPost] = useState({})

const openModal = () => {
    setViewModal(true)
}
const closeModal = () => {
    setViewModal(false)
}

const submitHandler = (e) => {
    e.preventDefault()
      /* проверяем на пустые строки */
          setPost(title, text, img, tag)
         
      
       }

 return (
   <>
        <div className="container">
          <h1 className="media-heading">{index+1}. {title}</h1>
        <p>{text}</p>
        <div className="text-center">
       <img src={img} class="rounded pict" alt=""/>
        </div>
        <p>Тэги: {tag}</p>
     
     
     <div class="d-flex justify-content-around">
     <button 
     onClick={() => {navigate(`/posts`)}}
     type="button" 
     className="btn btn-secondary rding">
         Назад
         </button>
         <button onClick={openModal} type="button" class="btn btn-warning">Редактировать</button>
         </div>
         </div>

         <Modal state={viewModal}
         onClose={closeModal}>
<Forma
onSubmit={submitHandler}
text={text} title={title} img={img} tag={tag} />
             </Modal> 
         </>
)
}
export default Detail