import axios from "axios";
import React, { useEffect, useState } from "react";

export const KidsCategory = () => {
    const [product, setProduct] = useState([]);
    // const [images, setImages] = useState();
  
    const options = {
      method: "GET",
      url: 'https://asos2.p.rapidapi.com/products/v2/list',
    params: {
      store: 'US',
      offset: '0',
      categoryId: '4209',
      limit: '3',
      country: 'US',
      sort: 'freshness',
      q: 'kids',
      currency: 'USD',
      sizeSchema: 'US',
      lang: 'en-US'
      },
      headers: {
        "X-RapidAPI-Key": "720d1b3727mshd22320b233377ccp1f0e0ajsnbefa861551e6",
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
      },
    };
    useEffect(() => {
  
      axios
        .request(options)
        .then(function (response) {
          setProduct(response.data.products);
          // setImages(response.data.products);
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }, []);
  
    return (
      <div>
        <h2>Kids Category</h2>
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
  }