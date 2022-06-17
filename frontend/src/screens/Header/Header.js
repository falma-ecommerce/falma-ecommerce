import React from 'react';
import  ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import  SearchIcon from '@material-ui/icons/Search';
import {NavLink} from "react-router-dom";
import "./Header.module.css"

export default function Header() {
    return (
        <div>
            <div className='"shopping-info'>
               <h4>FREE STANDARD SHIPPING ON ORDERS OVER 75€</h4>
            </div>
        </div>
    )
}