import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Routes/Home/Home';
import Footer from './components/Footer/Footer';
import Actividades from './components/Routes/Actividades/Actividades';
import QuienesSomos from './components/Routes/QuienesSomos/QuienesSomos';
import Contacto from './components/Routes/Contacto/Contacto';
import Alimentacion from './components/Routes/Recomendaciones/Alimentacion/Alimentacion';
import ActividadFisica from './components/Routes/Recomendaciones/ActividadFisica/ActividadFisica';
import PrevCardiovascular from './components/Routes/Recomendaciones/PrevCardiovascular/PrevCardiovascular';
import PrevOftalmo from './components/Routes/Recomendaciones/PrevOftalmo/PrevOftalmo';
import PieDiabetico from './components/Routes/Recomendaciones/PieDiabetico/PieDiabetico';
import Tratamientos from './components/Routes/Recomendaciones/Tratamientos/Tratamientos';

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
            <Route path='/alimentacion' element={<Alimentacion/>}/> 
            <Route path='/actividad-fisica' element={<ActividadFisica/>}/>
            <Route path='/prevencion-cardiovascular' element={<PrevCardiovascular/>}/>
            <Route path='/prevencion-oftalmologica' element={<PrevOftalmo/>}/>
            <Route path='/pie-diabetico' element={<PieDiabetico/>}/>
            <Route path='/tratamientos' element={<Tratamientos/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
