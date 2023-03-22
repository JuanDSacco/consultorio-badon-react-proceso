import '../../css/navBar.css'
import { Link } from 'react-router-dom';


const NavBar = () => {
    return(
        <div className='containerNavBar'>
            <ul className='ulNavBar'>
                <Link to={'/'}><li className='liNavBar'>Inicio</li></Link>
                <div className="btn-group" role="group">
                    <button id='buttonRecomendaciones' type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Recomendaciones</button>
                    <div className="dropdown-menu">
                        <ul className='ulRecomendaciones'>
                            <Link to={'/alimentacion'}><li>Alimentación</li></Link>
                            <Link to={'/actividad-fisica'}><li>Actividad física</li></Link>
                            <Link to={'/prevencion-cardiovascular'}><li>Prevención cardiovascular</li></Link>
                            <Link to={'/prevencion-oftalmologica'}><li>Prevención oftalmológica</li></Link>
                            <Link to={'/pie-diabetico'}><li>Pie diabético</li></Link>
                            <Link to={'/tratamientos'}><li>Tratamientos</li></Link>
                        </ul>
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