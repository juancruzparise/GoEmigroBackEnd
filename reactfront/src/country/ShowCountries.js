import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/countries/'


const ShowCountries = () => {
    
    const [countries, setCountry] = useState([])
    useEffect( ()=>{
        getCountries()
    },[])

    //procedimineto para mostrar todos los blogs
    const getCountries = async () => {
        const res = await axios.get(URI)
        setCountry(res.data)
    }

    //procedimineto para eliminar un blog
    const deleteCountry = async (id) => {
       await axios.delete(`${URI}${id}`)
       getCountries()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/createCountry" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>País</th>
                                <th>Continent</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { countries.map ( (country) => (
                                <tr key={ country.id}>
                                    <td> { country.name } </td>
                                    <td> { country.continent } </td>
                                    <td>
                                        <Link to={`/editCountry/${country.id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                        <button onClick={ ()=>deleteCountry(country.id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
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

export default ShowCountries