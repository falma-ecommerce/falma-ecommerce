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
              src="https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://ae01.alicdn.com/kf/H66b6b1cafc6049179e07e930481ecbc1f/Classic-Men-s-Formal-Shoes-High-quality-Leather-Men-s-Shoes-Italian-Style-Men-Dress-Shoes.jpg"
              alt=""
            />
          </div>
          <div className="carousel-category">
          <img
              src="https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://ae01.alicdn.com/kf/Hb18ec96e8d694ec693a70bb1844cc6a2G/High-Quality-Genuine-Leather-Italian-Mens-Shoes-Oxford-Shoes-For-Men-Formal-Wedding-Dress-Shoes-Zapatos.jpg"
              alt=""
            />
          </div>
          <div className="carousel-category">
          <img
              src="https://www.cartrollers.com/wp-content/uploads/2022/03/Mens-Black-Designers-Corporate-Shoes-2.jpeg"
              alt=""
            />
          </div>
        </div>

        <div className="carousel-category">
          <div >
            <img
              src="https://images.meesho.com/images/products/85920902/m3wrc_512.jpg"
              alt=""
            />
          </div>
          <div className="carousel-category">
          <img
              src="https://rukminim1.flixcart.com/image/714/857/kykgb680/shoe/s/u/9/3-879-pink-t-rock-pink-grey-original-imagarhhfjqnfxvn.jpeg?q=50"
              alt=""
            />
          </div>
          <div className="carousel-category">
          <img
              src="http://cdn.shopify.com/s/files/1/0520/5635/9093/products/1601538091390_IMG_5083-originnm80prcnt_1200x1200.jpg?v=1612106660"
              alt=""
            />
          </div>
        </div>

        <div className="carousel-category">
          <div >
            <img
              src="https://ae01.alicdn.com/kf/H77c73d5a20a64ebc8d1dd5cbcc010c7aQ/2022-New-Kids-Sport-Shoes-For-Boys-Sneakers-Girls-Fashion-Spring-Casual-Children-Shoes-Boy-Running.jpg"
              alt=""
            />
          </div>
          <div className="carousel-category">
          <img
              src="https://ae01.alicdn.com/kf/H9282b3e7b3454531af377a4a83555837x/New-Trend-Kids-Unisex-Casual-Shoes-Black-Kids-Sneakers-For-Boys-Fashion-Teenage-Trainers-Size-31.jpg"
              alt=""
            />
          </div>
          <div className="carousel-category">
          <img
              src="https://ae01.alicdn.com/kf/H271cc91e34f645d38e5c63874cc6a4ebd/JGVIKOTO-New-Boys-Shoes-Fashion-Soft-Flat-Loafers-For-Toddler-Boy-Big-Kids-Sneakers-Children-Flats.jpg_Q90.jpg_.webp"
              alt=""
            />
          </div>
        </div>

      </Carousel>
    </div>
  );
};

export default ShoesCarousel;