import '../../css/footer.css'

const Footer = () => {
    
    return(
        <>
            <div className="containerFooter">
                <div>
                    <h2>Contactanos</h2>
                    <div>
                        <ul className="ulDatos">
                            <li className="listaFooter">Email: alejandrabadon@gmail.com</li>
                            <li className="listaFooter">Whatsapp: 11-5555-5555</li>
                            <li className="listaFooter">Teléfono fijo: 4444-4444</li>
                            <li className="listaFooter">Dirección: Consquín 5124 - CABA</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="ulRedes">
                            <li className="listaRedes"><i class="fa-brands fa-instagram"></i></li>
                            <li className="listaRedes"><i class="fa-brands fa-whatsapp"></i></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2>Horarios</h2>
                    <ul className='ulHorarios'>
                        <li className='listaFooterH'>Lunes: </li>
                        <li className='listaFooterH'>Martes: </li>
                        <li className='listaFooterH'>Miercoles:</li>
                        <li className='listaFooterH'>Jueves: </li>
                        <li className='listaFooterH'>Viernes: </li>
                    </ul>
                </div>
            </div>
            <div className='spanFooter'>
                <span>Todos los derechos reservados por Copyright 2023</span>
            </div>
        </>
    )
}

export default Footer;