import '../../css/navBar.css'
import { Link } from 'react-router-dom';


const NavBar = () => {
    return(
        <div className='containerNavBar'>
            <ul className='ulNavBar'>
                <Link to={'/'}><li className='liNavBar'>Inicio</li></Link>
                <li className='liNavBar'>Recomendaciones</li>
                <Link to={'/actividades'}><li className='liNavBar'>Actividades</li></Link>
                <Link to={'/quienes-somos'}><li className='liNavBar'>Quiénes somos</li></Link>
                <Link to={'/contacto'}><li className='liNavBar'>Contacto</li></Link>
            </ul>
        </div>
    )
}

export default NavBar;