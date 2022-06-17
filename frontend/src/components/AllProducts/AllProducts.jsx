import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllProducts.modules.css";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  const myProductsOptions = {
    method: "GET",
    url: "https://asos2.p.rapidapi.com/products/v2/list",
    params: {
      store: "US",
      offset: "0",
      categoryId: "4209",
      limit: "48",
      country: "US",
      sort: "freshness",
      q: 'all',
      currency: "USD",
      sizeSchema: "US",
      lang: "en-US",
    },
    headers: {
      "X-RapidAPI-Key": "f439ca48dcmsh0405e7dd2edfc2dp12bbb7jsnd0ed07516ab0",
      "X-RapidAPI-Host": "asos2.p.rapidapi.com",
    },
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

export default AllProducts;