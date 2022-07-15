import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { sanitize } from "dompurify";
import { CartContext } from "../../contexts/CartContext";
import "./ProductDetails.modules.css";
import { toast } from "react-toastify";
import { getError } from "../../utils";
import "./ProductDetails.modules.css";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [images, setImages] = useState([]);
  const [firstUrl, setFirstUrl] = useState();
  const [productInfo, setProductInfo] = useState();
  const { id } = useParams();

  const { addItemToCart } = useContext(CartContext);

  const handleClick = (url) => {
    const mainImage = document.getElementById("main-image");
    mainImage.src = url;
  };

  const options = {
    method: "GET",
    url: `/extApi/product/details/${id}`,
  };

  useEffect(() => {
    try {
      axios.request(options).then(function (response) {
        setProduct(response.data);
        setImages(response.data.media.images);
        setFirstUrl(response.data.media.images[0]);
        setProductInfo(response.data.variants[0]);
        console.log(response.data.media.images);
      });
    } catch (error) {
      toast.error(getError(error));
    }
  }, []);

  const addToCart = (product) => {
    addItemToCart(product, 1);
  };

  return (
    <div>
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
                style={{ height: "83.5vh", width: "100%" }}
                alt="Article not no longer in stock"
              ></img>
            )}
          </div>
        </div>
        <div className="all-product-info">
          <h4>{productInfo && productInfo.name}</h4>
          <p>
            <span className="new-price">
              {productInfo && productInfo.price.current.text}{" "}
            </span>
            <span className="tax">(inkl. MwSt)</span>
          </p>
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
            <button onClick={() => addToCart(product)} className="cart">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
