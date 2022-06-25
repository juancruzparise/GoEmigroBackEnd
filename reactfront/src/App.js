import logo from './logo.svg';
import './App.css';

//importamos los componentes
import ShowCountries from './country/ShowCountries';
import CreateCountry from './country/CreateCountry';
import EditCountry from './country/EditCountry';
import ShowNoticies from './notice/ShowNoticies';
import CreateNotice from './notice/CreateNotice';
import EditNotice from './notice/EditNotice';


//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/showCountries' element={ <ShowCountries />} />
            <Route path='/createCountry' element={ <CreateCountry />} />
            <Route path='/editCountry/:id' element={ <EditCountry />} />
            <Route path='/showNoticies' element={ <ShowNoticies />} />
            <Route path='/createNotice' element={ <CreateNotice />} />
            <Route path='/editNotice/:idNotice' element={ <EditNotice />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
