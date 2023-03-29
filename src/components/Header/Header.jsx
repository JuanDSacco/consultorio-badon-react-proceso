import '../../css/header.css'
import logo from '../../Assets/Logo/logo-final.png';

const Header = () => {  

    return(
        <div className='containerHeader'>
        <div className='divH2'>
            <h2 className='h2Header'>Atención integral</h2>
            <h2 className='h2Header'>Diabetes, Heridas y Pie Diabético</h2>
        </div>
        <div className='divImg'>
            <img className='imgLogo' src={logo} alt='imagen-logo'/>
        </div>
        </div>
    )
}

export default Header;