import '../../../css/cardQS1.css';
import caraDoctora from '../../../Assets/CaraPersonal/caraDoctora.jpg'

const CardXoana = () => {

    return(
        <div className="cardQSContainer1">
            <div className="divDesempeño1">
                <div>
                    <h2 className='h2CardQS1'>- Licenciada en Nutrición</h2>
                    <h2 className='h2CardQS1'>- MN 28.215</h2>
                </div>
            </div>
            <div className="divImg1">
                <h1 className='h1CardQS1'>Xoana</h1>
                <img className='imgCardQS1' src={caraDoctora} alt=""/>
                
            </div>
        </div>
    )
} 

export default CardXoana;