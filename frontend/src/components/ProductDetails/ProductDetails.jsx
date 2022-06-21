import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { sanitize } from 'dompurify'
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
  console.log(product);
  return (
    <div>
      {/* <h1>Product Detail</h1> */}
      {/* <h3>{product && product.name}</h3> */}
      <div className="product-detail">
        <div className="product-image">
          <div className="images">
            {images &&
              images.map((product, index) => (
                <div className="hover-image" key={index}>
                  <img
                    id={index}
                    onClick={() => handleClick("https://" + product.url)}
                    src={`https://${product.url}`}
                    // width=""
                    // height="200"
                    style={{ height: "20.55vh" }}
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
                style={{ height: "83.5vh" }}
                // width=""
                // height="813"
                alt="Article not no longer in stock"
              ></img>
            )}
          </div>
        </div>

        <div className="all-product-info">
          <h4>{productInfo && productInfo.name}</h4>
          <p>{productInfo && productInfo.price.current.text}</p>
          <p>{productInfo && productInfo.colour}</p>

          <p>{productInfo && productInfo.id}</p>

          <hr className="line"></hr>
          <p
            dangerouslySetInnerHTML={{ __html: sanitize(product?.description) }}
          ></p>
          <p
            dangerouslySetInnerHTML={{
              __html: sanitize(product && product.info && product.info.aboutMe),
            }}
          ></p>
          <p
            dangerouslySetInnerHTML={{
              __html: sanitize(product?.info?.sizeAndFit),
            }}
          ></p>
          <p
            dangerouslySetInnerHTML={{
              __html: sanitize(product?.info?.careInfo),
            }}
          ></p>
          <div>
            <Link className="cart" to={"/basket"}>
              <p>ADD TO CART</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
