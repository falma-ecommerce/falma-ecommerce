import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import MyContext from "./MyContext";

const SearchContext = ({ children }) => {
  const [data, setData] = useState({
    results: null,
    loading: true,
    error: null,
  });
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const inputRef = useRef();

  const URI = `/extApi/products?q=${search}`;

  useEffect(() => {
    const fetchData = async (req, res) => {
      try {
        const response = await fetch(URI);
        const results = await response.json();
        console.log(results);
        setData({ results, loading: false, error: null });
      } catch (error) {
        setData({ results: null, loading: false, error });
      }
    };
    fetchData();
  }, [URI]);
  if (data.loading)
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <Spinner />
      </div>
    );

  if (data.error) return <p>{data.error}</p>;

  const productList = data.results.products.map((product) => (
    <Link
      className="all-products "
      to={`/product-details/${product.id}`}
      key={product.id}
    >
      <img src={`https://${product.imageUrl}`} alt=""></img>
      <div className="price">
        <p>
          <span className="old-price">{product.price.previous.text}</span>
          <span className="new-price">{product.price.current.text}</span>
          <span className="tax">(inkl. Taxes)</span>
        </p>
      </div>
      <div className="products-name">
      <p>{product.name}</p>
        <Helmet>
          <title>{product.name}</title>
        </Helmet>
      </div>
    </Link>
  ));

  return (
    <MyContext.Provider
      value={{
        data,
        setData,
        search,
        setSearch,
        searchInput,
        setSearchInput,
        productList,
        inputRef,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default SearchContext;
