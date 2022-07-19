import React from "react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ControlledCarousel.css";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carouselContainer">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="carouselItem">
          <Link to="/menCategory">
            <img
              className="d-block w-100"
              src="../images/menF.jpg"
              alt="First slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Link>
        </Carousel.Item>

        <Carousel.Item className="carouselItem">
          <Link to="/womenCategory">
            <img
              className="d-block w-100"
              src="../images/women-F.jpg"
              alt="Second slide"
            />
            <Carousel.Caption className="color"></Carousel.Caption>
          </Link>
        </Carousel.Item>

        <Carousel.Item className="carouselItem">
          <Link to="/kidsCategory">
            <img
              className="d-block w-100"
              src="../images/kids-F.jpg"
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
