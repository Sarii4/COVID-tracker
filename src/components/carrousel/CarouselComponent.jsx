import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {

    return(
        <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      useKeyboardArrows
      dynamicHeight={true}
      emulateTouch={true}
    >
      <div>
        <img src="https://via.placeholder.com/3600x800" alt="slide1" />
        <p className="legend"></p>
      </div>
      <div>
        <img src="https://via.placeholder.com/3600x800" alt="slide2" />
        <p className="legend"></p>
      </div>
      <div>
        <img src="https://via.placeholder.com/3600x800" alt="slide3" />
        <p className="legend"></p>
      </div>
    </Carousel>
    )
}

export default CarouselComponent;