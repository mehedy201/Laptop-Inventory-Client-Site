import React from "react";
import { Carousel } from "react-bootstrap";
import hpImage from '../../../Images/sliderImage/slider.png';
import appleImage from '../../../Images/sliderImage/apple.png';
import assusImage from '../../../Images/sliderImage/asus.png';
import './Slider.css'

const Slider = () => {
  return (
    <div className="bg-secondary px-5">
      <Carousel fade className="container">
          <Carousel.Item className="for_hieght d-flex align-items-center">
              <div className="for_img_and_caption row mx-auto">
                  <div className="col-md-6">
                    <img
                      className="for_img_height ms-md-5 ps-md-5"
                      src={hpImage}
                      alt="First slide"
                    />
                  </div>
                  <div className=" col-md-6 carosel_info">
                    <h3 className="text-white">HP is a Top laptop selling Company</h3>
                    <p className="text-color">Hp laptop is a best for Freelancing and daly taskig. It's resenoble and Good qality</p>
                  </div>
              </div>
          </Carousel.Item>
          <Carousel.Item className="for_hieght d-flex align-items-center">
            <div className="for_img_and_caption row mx-auto">
                <div className="carosel_info col-md-6 ps-md-5">
                  <div className="ps-md-5">
                      <h3 className="text-white ps-md-5">Primume quality Laptop</h3>
                      <p className="text-color ps-md-5">If you want to edit video then best ever for you</p>
                  </div>
                </div>
                <div className="col-md-5 me-auto">
                    <img
                      className="for_img_height p-3"
                      src={appleImage}
                      alt="Second slide"
                    />
                </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="for_hieght d-flex align-items-center">
            <div className="for_img_and_caption row mx-auto">
                <div className="col-md-6">
                    <img
                      className="for_img_height ms-md-5 ps-md-5"
                      src={assusImage}
                      alt="Third slide"
                    />
                </div>
                <div className="carosel_info col-md-6">
                  <h3 className="text-white">Assus Rog For Gamaing</h3>
                  <p className="text-color">Game is very Importent part of Laptop. Best gaming laptop is Assus Rog</p>
                </div>
            </div>
          </Carousel.Item>
        </Carousel>
    </div>
  );
};

export default Slider;
