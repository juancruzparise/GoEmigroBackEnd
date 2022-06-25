import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/countries/'

const EditCountry = () => {
    const [name, setName] = useState('')    
    const [continent, setContinent] = useState('')    
    const navigate = useNavigate()
    const {id} = useParams()

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            name: name,
            continent: continent
        })
        navigate('/showcountries')
    }

    useEffect( ()=>{
        getCountryById()
    },[])

    const getCountryById = async () => {
        const res = await axios.get(URI+id)
        setName(res.data.name)
        setContinent(res.data.continent)
    }

    return (
        <div>
        <h3>Edit POST</h3>
        <form onSubmit={update}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                    value={name}
                    onChange={ (e)=> setName(e.target.value)}
                    type="text"
                    className="form-control"                        
                />
            </div>
            <div className="mb-3">
                <label  className="form-label">Continent</label>
                <textarea
                    value={continent}
                    onChange={ (e)=> setContinent(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>            
            <button type="submit" className="btn btn-primary">Update</button>
        </form>
    </div>
    )

}

export default EditCountry