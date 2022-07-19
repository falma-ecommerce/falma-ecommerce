import React from "react";
import Carousel from "nuka-carousel";
import "./ShoesCarousel.modules.css";
import { Link } from "react-router-dom";

const ShoesCarousel = () => {
  return (
    <div className="all-carousel-category">
      <Carousel>
        <Link to="/men-shoes">
          <div className="carousel-category" >
            <div className="carousel-img">
              <img src="../shoe-img/shoe-m1.jpg" alt=""/>
            </div>
            <div className="carousel-img">
              <img src="../shoe-img/shoe-m2.jpg" alt="" />
            </div>
            <div className="carousel-img">
              <img src="../shoe-img/shoe-m3.jpeg" alt="" />
            </div>
          </div>
        </Link>

        <Link to="/women-shoes">
          <div className="carousel-category">
            <div className="carousel-img">
              <img src="../shoe-img/shoew1.jpg" alt="" />
            </div>
            <div className="carousel-img">
              <img src="../shoe-img/shoew3.jpg" alt="" />
            </div>
            <div className="carousel-img">
              <img src="../shoe-img/shoe4.jpg" alt="" />
            </div>
          </div>
        </Link>

        <Link to="/kids-shoes">
          <div className="carousel-category">
            <div className="carousel-img">
              <img src="../shoe-img/kidshoe1.jpg" alt="" />
            </div>
            <div className="carousel-img">
              <img src="../shoe-img/kidsandals.jpg" alt="" />
            </div>
            <div className="carousel-img">
              <img src="../shoe-img/kidshoe2.webp" alt="" />
            </div>
          </div>
        </Link>
      </Carousel>
    </div>
  );
};

export default ShoesCarousel;
