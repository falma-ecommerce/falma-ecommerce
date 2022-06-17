import React from "react";
import Carousel from "nuka-carousel";
import "./ShoesCarousel.modules.css";

const ShoesCarousel = () => {
  return (
    <div className="shoe-carousel">
      <Carousel>
        <div className="carousel-category">
          <div >
            <img
              src="../shoe-img/shoe-m1.jpg"
              alt=""
            />
          </div>
          <div className="carousel-category">
          <img
              src="../shoe-img/shoe-m2.jpg"
              alt=""
            />
          </div>
          <div className="carousel-category">
          <img
              src="../shoe-img/shoe-m3.jpeg"
              alt=""
            />
          </div>
        </div>

        <div className="carousel-category">
          <div >
            <img
              src="../shoe-img/shoe-w1.jpeg"
              alt=""
            />
          </div>
          <div className="carousel-category">
          <img
              src="../shoe-img/shoe-w2.jpg"
              alt=""
            />
          </div>
          <div className="carousel-category">
          <img
              src="../shoe-img/shoe-w3.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="carousel-category">
          <div >
            <img
              src="../shoe-img/shoe-c1.jpeg"
              alt=""
            />
          </div>
          <div className="carousel-category">
          <img
              src="../shoe-img/shoe-c2.jpg"
              alt=""
            />
          </div>
          <div className="carousel-category">
          <img
              src="../shoe-img/shoe-c3.jpg"
              alt=""
            />
          </div>
        </div>

      </Carousel>
    </div>
  );
};

export default ShoesCarousel;