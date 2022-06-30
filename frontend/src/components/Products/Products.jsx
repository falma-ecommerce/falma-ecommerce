import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import logger from "logger-for-use-reducer";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./Products.modules.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const Products = ({ q }) => {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });
  // const [products, setProducts] = useState([]);

  const myProductsOptions = {
    method: "GET",
    url: `/extApi/products?q=${q}`,
  };

  useEffect(() => {
    dispatch({ type: "FETCH_REQUEST" });

    axios
      .request(myProductsOptions)
      .then(function (response) {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data.products });
        // setProducts(response.data.products);
      })
      .catch(function (error) {
        // console.error(error);
        dispatch({ type: "FETCH_FAIL", payload: error.message });
      });
  }, []);

  return (
    <>
      {/* <h1 className="products-header">All Products</h1> */}
      <motion.div
        className="products-link"
        layout
        animate={{ opacity: 5 }}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
      >
        <AnimatePresence>
          {loading ? (
            <div>
              <Box sx={{ display: "flex"}}>
                <CircularProgress />
              </Box>
            </div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            products &&
            products.map((product) => (
              <Link
                className="all-products"
                to={`/product-details/${product.id}`}
                key={product.id}
              >
                <img src={`https://${product.imageUrl}`} alt=""></img>
                <div className="price">
                  <p>
                    <span className="old-price">
                      {product.price.previous.text}
                    </span>
                    <span className="new-price">
                      {product.price.current.text}
                    </span>
                    <span className="tax">(inkl. Taxes)</span>
                  </p>
                  {/* <p>{product.colour}</p> */}
                </div>
                <div className="products-name">
                  <p>{product.name}</p>
                </div>
              </Link>
            ))
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Products;
