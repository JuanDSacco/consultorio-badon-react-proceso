import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Speach from './components/Speach/Speach';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Speach/>
      <BrowserRouter>
        <Routes>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
