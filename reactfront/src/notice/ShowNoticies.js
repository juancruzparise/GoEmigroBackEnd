import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/noticies/'


const ShowNoticies = () => {
    
    const [noticies, setNotice] = useState([])
    useEffect( ()=>{
        getNoticies()
    },[])

    //procedimineto para mostrar todos los blogs
    const getNoticies = async () => {
        const res = await axios.get(URI)
        setNotice(res.data)
    }

    //procedimineto para eliminar un blog
    const deleteNotice = async (id) => {
       await axios.delete(`${URI}${id}`)
       getNoticies()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/createNotice" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Title</th>
                                <th>Continent1</th>
                                <th>Continent2</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { noticies.map ( (notice) => (
                                <tr key={ notice.id}>
                                    <td> { notice.title } </td>
                                    <td> { notice.content1 } </td>
                                    <td> { notice.content2 } </td>
                                    <td>
                                        <Link to={`/editNotice/${notice.id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                        <button onClick={ ()=>deleteNotice(notice.id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    )

}

export default ShowNoticies