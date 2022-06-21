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
              src="../images/menCover2.jpg"              
              alt="First slide"
            />

            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

        <Carousel.Item className="carouselItem">
        <Link to="/womenCategory">
          <img
            className="d-block w-100"
            src="../images/womenCover.png"
            // href="/womenCategory"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
          </Link>
        </Carousel.Item>

        <Carousel.Item className="carouselItem">
        <Link to="/kidsCategory">
          <img
            className="d-block w-100"
            src="../images/childrenCover.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
