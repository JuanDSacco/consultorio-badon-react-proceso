import '../../../css/cardQS2.css';
import caraDoctora from '../../../Assets/CaraPersonal/caraDoctora.jpg'

const CardFabiana = () => {

    return(
        <div className="cardQSContainer2">
            <div className="divImg2">
                <h1 className='h1CardQS2'>Fabiana Pereyra</h1>
                <img className='imgCardQS2' src={caraDoctora} alt=""/>
                
            </div>
            <div className="divDesempeño2">
                <div>
                    <h2 className='h2CardQS2'>- Enfermera especializata en <br/> 
                    cicatrización de heridas</h2>
                    <h2 className='h2CardQS2'>- MN 21.154</h2>
                </div>
            </div>
        </div>
    )
} 

export default CardFabiana;