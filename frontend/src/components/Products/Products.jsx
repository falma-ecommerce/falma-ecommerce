import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import "./Products.modules.css";
import { toast } from "react-toastify";
import { getError } from "../../utils";
import { Helmet } from "react-helmet-async";

const Products = ({ q }) => {
  const [products, setProducts] = useState([]);

  const myProductsOptions = {
    method: "GET",
    url: `/extApi/products?q=${q}`,
  };

  useEffect(() => {
    axios
      .request(myProductsOptions)
      .then(function (response) {
        console.log(response.data);
        setProducts(response.data.products);
      })
      .catch(function (error) {
        toast.error(getError(error));
      });
  }, []);

  return (
    <>
      {products &&
        products.map((product) => (
          <Link
            className="all-products"
            to={`/product-details/${product.id}`}
            key={product.id}
          >
            <img src={`https://${product.imageUrl}`} alt=""></img>
            <div className="price">
              <p>{product.price.current.text}</p>
            </div>
            <Helmet>
            <div className="products-name">
              <p>{product.name}</p>
            </div>
            </Helmet>
          </Link>
        ))}
    </>
  );
};

export default Products;
