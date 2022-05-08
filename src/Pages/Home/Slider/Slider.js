import React from "react";
import { Carousel } from "react-bootstrap";
import hpImage from '../../../Images/sliderImage/slider.png';
import appleImage from '../../../Images/sliderImage/apple.png';
import assusImage from '../../../Images/sliderImage/assus.png'

const Slider = () => {
  return (
    <div>
      <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={hpImage}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>HP is a Top laptop selling Company</h3>
              <p>Hp laptop is a best for Freelancing and daly taskig. It's resenoble and Good qality</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={appleImage}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Primume quality Laptop</h3>
              <p>If you want to edit video then best ever for you</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={assusImage}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Assus Rog For Gamaing</h3>
              <p>Game is very Importent part of Laptop. Best gaming laptop is Assus Rog</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
  );
};

export default Slider;
