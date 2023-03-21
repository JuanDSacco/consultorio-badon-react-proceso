import diabetes1 from '../../Assets/diabetes1.jpg';
import diabetes2 from '../../Assets/diabetes2.jpg';
import diabetes3 from '../../Assets/diabetes3.jpg';
import '../../css/carousel.css'

const Carousel = () => {
    
    return(
        <div className='containerCarousel'> 
            <div className='divCarousel' style={{height:'500px',width:'800px',paddingTop:'50px'}} id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img style={{height:'500px',width:'800px'}} src={diabetes1} class="d-block w-100" alt="diabetes"/>
                    </div>
                    <div class="carousel-item">
                    <img style={{height:'500px',width:'800px'}} src={diabetes2} class="d-block w-100" alt="diabetes"/>
                    </div>
                    <div class="carousel-item">
                    <img style={{height:'500px',width:'800px'}} src={diabetes3} class="d-block w-100" alt="diabetes"/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </button>
            </div>
        </div>
    )

}

export default Carousel;