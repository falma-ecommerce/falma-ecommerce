import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { CartContext } from "../../../contexts/CartContext";
import Navigation from "../Header/Navigation"
import "./Header.modules.css";
import { AuthContext } from "../../../contexts/AuthContext";
import { PrivateNav, PublicNav } from "../../Menu";
import SearchForm from "../../SearchForm/SearchForm";

export default function Header() {  

  const { loggedIn } = useContext(AuthContext);
  const { totalQuantities } = useContext(CartContext);
  return (
    <div>
      <div className="shipping-info">
        <Marquee className="marquee">
          <h6>FREE STANDARD SHIPPING ON ORDERS OVER €75</h6>
        </Marquee>
      </div>
      <div className="nav-info">
        <div className="searchForm">  
        <SearchForm />         
        </div>

        <div className="websiteName">
          <NavLink to="/">
            <h1> FALMA Shop</h1>
          </NavLink>
        </div>
        <div className="toggleNav">
          {loggedIn ? <PrivateNav /> : <PublicNav />}
        </div>
        <div className="login-cart">
          <div className="loginIcon">
            <NavLink to="/signin"></NavLink>
          </div>
          <div>
            <NavLink to="/myCart">
              <ShoppingCartIcon />
              <p id="shopping-cart-count">{totalQuantities}</p>
            </NavLink>
          </div>
        </div>
       
      </div>
      <div> <Navigation />
      </div>

     
     
      
    </div>
  );
}
