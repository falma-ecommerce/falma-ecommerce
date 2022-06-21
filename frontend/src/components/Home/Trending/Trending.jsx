import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Trending.modules.css";

export default function Trending() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/interApi/products");
      setProducts(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to="/trending">
              <img src={product.image} alt={product.name} />
            </Link>

            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.category}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
