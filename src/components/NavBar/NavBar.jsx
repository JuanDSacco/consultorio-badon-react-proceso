import '../../css/navBar.css'
import { Link } from 'react-router-dom';


const NavBar = () => {
    return(
        <div className='containerNavBar'>
            <ul className='ulNavBar'>
                <Link to={'/'}><li className='liNavBar'>Inicio</li></Link>
                <div class="btn-group" role="group">
                    <button id='buttonRecomendaciones' type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Recomendaciones</button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Alimentación</a>
                        <a class="dropdown-item" href="#">Actividad física</a>
                        <a class="dropdown-item" href="#">Prevención cardiovascular</a>
                        <a class="dropdown-item" href="#">Prevención oftalmológica</a>
                        <a class="dropdown-item" href="#">Pie diabético</a>
                        <a class="dropdown-item" href="#">Tratamientos</a>
                    </div>
                </div>
                <Link to={'/actividades'}><li className='liNavBar'>Actividades</li></Link>
                <Link to={'/quienes-somos'}><li className='liNavBar'>Quiénes somos</li></Link>
                <Link to={'/contacto'}><li className='liNavBar'>Contacto</li></Link>
            </ul>
        </div>
    )
}

export default NavBar;