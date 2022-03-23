import { useEffect, useRef } from "react"

function Forma({onSubmit, title = '', text= '', img = '', tag = ''}) {

const formRef = useRef(null)

useEffect(() => {
formRef.current.elements.title.value = title
formRef.current.elements.text.value = text
formRef.current.elements.img.value = img
formRef.current.elements.tag.value = tag
}, [])

    return (
        <form ref={formRef} className="d-flex flex-column align-items-center rb-3" onSubmit={onSubmit}>
    <div className="mb-3">
            <input 
      placeholder="Измените заголовок"
      type="text"
      name="title" 
      className="form-control " 
      id="exampleInputEmail1" 
      aria-describedby="emailHelp" 
            />

    </div>
    <div className="mb-3">
            <div class="form-group">
    
            <textarea name="text"
     placeholder="Измените текст"
      type="text" 
      className="form-control" 
      id="exampleInputPassword1" 
            />
  </div>
    </div>
    <div 
    className="mb-3">
    <input name="img"
     placeholder="Измените ссылку"
      type="text" 
      className="form-control" 
      id="exampleInputPassword1" 
            />
     
    </div>
    <div 
    className="mb-3">
      
      <input name="tag"
      placeholder="измените тэг"
      type="text" 
      className="form-control" 
      id="exampleInputPassword1" 
      
      />

    </div>
        <button 
    type="submit" 
    className="btn btn-primary">
        Опубликовать
        </button>
  </form>
    )
}
export default Forma