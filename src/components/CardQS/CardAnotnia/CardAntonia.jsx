import '../../../css/cardQS2.css';
import caraDoctora from '../../../Assets/CaraPersonal/caraDoctora.jpg'

const CardAntonia = () => {

    return(
        <div className="cardQSContainer2">
            <div className="divImg2">
                <h1 className='h1CardQS2'>Antonia Cabral</h1>
                <img className='imgCardQS2' src={caraDoctora} alt=""/>
                
            </div>
            <div className="divDesempeño2">
                <div>
                    <h2 className='h2CardQS2'>- Licenciatura en Enfermería</h2>
                    <h2 className='h2CardQS2'>- Podóloga universitaria</h2>
                    <h2 className='h2CardQS2'>- Diplomada en Pie Diabético</h2>
                    <h2 className='h2CardQS2'>- MN 25.154</h2>
                </div>
            </div>
        </div>
    )
} 

export default CardAntonia;