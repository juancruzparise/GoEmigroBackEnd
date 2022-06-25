import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/countries/'

const CreateCountry = () => {
    const [name, setName] = useState('')    
    const [continent, setContinent] = useState('')    
    const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {name: name, continent:continent})
        navigate('/showCountries')
    }   

    return (
        <div>
           <h3>Create POST</h3>
           <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Name</label>
                    <input
                        value={name}
                        onChange={ (e)=> setName(e.target.value)} 
                        type="text"
                        className='form-control'
                        required
                    />
                 </div>   
                 <div className='mb-3'>
                     <label className='form-label'>Continent</label>
                    <textarea
                        value={continent}
                        onChange={ (e)=> setContinent(e.target.value)} 
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

export default CreateCountry