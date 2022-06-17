import React, { useEffect, useState } from "react";
import axios from "axios";

const WomenCategory = () => {
  const [product, setProduct] = useState([]);
  // const [images, setImages] = useState([]);

  const options = {
    method: "GET",
    url: "https://asos2.p.rapidapi.com/products/v2/list",
    params: {
      store: "US",
      offset: "0",
      categoryId: "4209",
      limit: "48",
      country: "US",
      sort: "freshness",
      q: "women",
      currency: "USD",
      sizeSchema: "US",
      lang: "en-US",
    },
    headers: {
      "X-RapidAPI-Key": "e762a887b4mshae580cc7045c7e5p1279a6jsn8a37c50341c6",
      "X-RapidAPI-Host": "asos2.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setProduct(response.data.products);

        console.log(response.data.products);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Women Category</h2>
      <h2> {product && product.name} </h2>
      {product &&
        product.map((product, index) => (
          <div key={index}>
            <p>{product.name}</p>
            <img
              src={`https://${product.imageUrl}`}
              width="400"
              height="300"
              alt=""
            ></img>
          </div>
        ))}
    </div>
  );
};

export default WomenCategory;
