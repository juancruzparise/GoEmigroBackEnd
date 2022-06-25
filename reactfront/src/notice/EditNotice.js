import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/noticies/'

const EditNotice = () => {
    const [title, setTitle] = useState('')    
    const [content1, setContent1] = useState('')    
    const [content2, setContent2] = useState('') 
    const navigate = useNavigate()
    const {id} = useParams()

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            title: title,
            content1: content1,
            content2: content2
        })
        navigate('/showNoticies')
    }

    useEffect( ()=>{
        getNoticeById()
    },[])

    const getNoticeById = async () => {
        const res = await axios.get(URI+id)
        setTitle(res.data.title)
        setContent1(res.data.content1)
        setContent2(res.data.content2)
    }

    return (
        <div>
        <h3>Edit POST</h3>
        <form onSubmit={update}>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                    value={title}
                    onChange={ (e)=> setTitle(e.target.value)}
                    type="text"
                    className="form-control"                        
                />
            </div>
            <div className="mb-3">
                <label  className="form-label">Content 1</label>
                <textarea
                    value={content1}
                    onChange={ (e)=> setContent1(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>   
            <div className="mb-3">
                <label  className="form-label">Content 2</label>
                <textarea
                    value={content2}
                    onChange={ (e)=> setContent2(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>          
            <button type="submit" className="btn btn-primary">Update</button>
        </form>
    </div>
    )

}

export default EditNotice