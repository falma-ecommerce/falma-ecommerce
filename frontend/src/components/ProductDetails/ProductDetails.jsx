import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

import "./ProductDetails.modules.css";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [images, setImages] = useState([]);
  const [firstUrl, setFirstUrl] = useState();
  const [productInfo, setProductInfo] = useState();
  const { id } = useParams();

  
  const handleClick = (url) => {
    const mainImage = document.getElementById("main-image");
    mainImage.src = url;
    // alert(url);
  };

  const options = {
    method: "GET",
    url: `/extApi/product/details/${id}` 
  };
  
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setProduct(response.data);
        setImages(response.data.media.images);
        setFirstUrl(response.data.media.images[0]);
        setProductInfo(response.data.variants[0]);
        console.log(response.data.media.images);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  console.log(firstUrl);
  return (
    <div>
      <h1>Product Detail</h1>
      {/* <h3>{product && product.name}</h3> */}
      <div className="product-detail">
        <div className="images">
          {images &&
            images.map((product, index) => (
              <div className="hover-image" key={index}>
                <img 
                  id={index}
                  onClick={() => handleClick("https://" + product.url)}
                  src={`https://${product.url}`}
                  width="150"
                  height="200"
                  alt="Article not no longer in stock"
                ></img>
              </div>
            ))}
        </div>
        <div className="firstUrl">
          {firstUrl && (
            <img
              id="main-image"
              src={`https://${firstUrl.url}`}
              width="700"
              height="813"
              alt="Article not no longer in stock"
            ></img>
          )}
        </div>
        <div className="all-product-info">
          <h4>{productInfo && productInfo.name}</h4>
          <p>{productInfo && productInfo.price.current.text}</p>
          <p>{productInfo && productInfo.colour}</p>
          <p>{productInfo && productInfo.displaySizeText}</p>
          <p>{productInfo && productInfo.id}</p>
          {/* <h3>{product && product.description}</h3> */}
          <hr className="line"></hr>
          <ul>
            <li>
              <strong>
                <p>By Another Influence</p>
              </strong>
              <ul>
                {" "}
                <li>One for your wardrobe </li> <li>Crew neck</li>
                <li>Contrast sleeve panels </li> <li>Fitted trims</li>
                <li>Regular fit </li>
                <li>No surprises, just a classic cut</li>
              </ul>
            </li>
          </ul>
          <div> 
            <br />
            <Link className="cart" to={"/cart"}>
              <p>ADD TO CART</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;