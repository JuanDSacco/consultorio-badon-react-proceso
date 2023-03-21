import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Routes/Home/Home';
import Footer from './components/Footer/Footer';
import Actividades from './components/Routes/Actividades/Actividades';
import QuienesSomos from './components/Routes/QuienesSomos/QuienesSomos';
import Contacto from './components/Routes/Contacto/Contacto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/actividades' element={<Actividades/>}/>
            <Route path='/quienes-somos' element={<QuienesSomos/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
