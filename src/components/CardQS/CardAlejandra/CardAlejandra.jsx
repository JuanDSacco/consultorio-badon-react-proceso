import '../../../css/cardQS1.css';
import caraDoctora from '../../../Assets/CaraPersonal/caraDoctora.jpg'

const CardAlejandra = () => {

    return(
        <div className="cardQSContainer1">
            <div className="divDesempeño1">
                <div>
                    <h2 className='h2CardQS1'>- Magister en Diabetología</h2>
                    <h2 className='h2CardQS1'>- Diplomada en cicatrización <br/>
                    de heridas y Pie Diabético</h2>
                    <h2 className='h2CardQS1'>- MN 26.895</h2>
                </div>
            </div>
            <div className="divImg1">
                <h1 className='h1CardQS1'>Alejandra F. Badón</h1>
                <img className='imgCardQS1' src={caraDoctora} alt=""/>
                
            </div>
        </div>
    )
} 

export default CardAlejandra;