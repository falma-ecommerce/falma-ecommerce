import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import "./Products.modules.css";

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
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1 className="products-header">All Products</h1>
      <motion.div
        className="products-link"
        layout
        animate={{ opacity: 5 }}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
      >
        <AnimatePresence>
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
                <div className="products-name">
                  <p>{product.name}</p>
                </div>
              </Link>
            ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Products;
