import React from "react";
import Carousel from "nuka-carousel";
import "./ShoesCarousel.modules.css";
import { Link } from "react-router-dom";

const ShoesCarousel = () => {
  return (
    <div className="all-carousel-category">
      <Carousel >
         <Link to='/men-shoes'>
        <div className="carousel-category">         
          <div>
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
        </Link>

        <Link to='/women-shoes'>
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
        </Link>
        
        <Link to='/sport-shoes'>
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
        </Link>
      </Carousel>
    </div>
  );
};

export default ShoesCarousel;