import '../../css/navBar.css'

const NavBar = () => {
    return(
        <div className='containerNavBar'>
            <ul className='ulNavBar'>
                <li className='liNavBar'>Recomendaciones</li>
                <li className='liNavBar'>Actividades</li>
                <li className='liNavBar'>Quiénes somos</li>
                <li className='liNavBar'>Contacto</li>
            </ul>
        </div>
    )
}

export default NavBar;