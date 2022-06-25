import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/noticies/'

const CreateNotice = () => {
    const [title, setTitle] = useState('')    
    const [content1, setContent1] = useState('')    
    const [content2, setContent2] = useState('')   
    const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {title: title, content1:content1, content2:content2})
        navigate('/showNoticies')
    }   

    return (
        <div>
           <h3>Create POST</h3>
           <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Title</label>
                    <input
                        value={title}
                        onChange={ (e)=> setTitle(e.target.value)} 
                        type="text"
                        className='form-control'
                        required
                    />
                 </div>   
                 <div className='mb-3'>
                     <label className='form-label'>Content 1</label>
                    <textarea
                        value={content1}
                        onChange={ (e)=> setContent1(e.target.value)} 
                        type="text"
                        className='form-control'
                        required
                    />                 
                 </div> 
                 <div className='mb-3'>
                     <label className='form-label'>Content 2</label>
                    <textarea
                        value={content2}
                        onChange={ (e)=> setContent2(e.target.value)} 
                        type="text"
                        className='form-control'
                        required
                    />                 
                 </div>  
                 <button type='submit' className='btn btn-primary'>Store</button>                  
           </form>
        </div>
    )
}

export default CreateNotice