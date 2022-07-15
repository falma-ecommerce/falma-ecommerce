import React from 'react'
import { useContext } from 'react'
import MyContext from '../../contexts/MyContext';
import './SearchProduct.module.css'

export default function SearchProduct() {

    const { productList } =   useContext(MyContext);

  return (
    <div className='products-link'>
      {productList}
  </div>
  )
}
