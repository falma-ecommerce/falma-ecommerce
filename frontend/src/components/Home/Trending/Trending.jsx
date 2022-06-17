import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import data from '../../../data'
import './Trending.modules.css'


export default function Trending() {
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/products');
      setProducts(result.data)
    }
    fetchData();
  }, []);


  return (
    <div>
        <div className="products">
          {products.map((product) => (
            <div className="product" key={product.slug}>
              
              <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </Link>
              
              <div className="product-info">
                <Link to={`/product/${product.slug}`}>
                  <p>{product.category}</p>
                </Link>
                {/* <p>
                  <strong>${product.price}</strong>
                </p> */}
                {/* <button>Add to cart</button> */}
              </div>
            </div>
          ))}
        </div> 
    </div>
  )
}