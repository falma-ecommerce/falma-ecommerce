import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { CartContext } from "../../../contexts/CartContext";
<<<<<<< HEAD
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Header.modules.css";
import { AuthContext } from "../../../contexts/AuthContext";
import { PrivateNav, PublicNav } from "../../Navigation";
import CartIcon from "../../Utility/cartIcon";
=======
import Navigation from "../Header/Navigation"
import "./Header.modules.css";
import { AuthContext } from "../../../contexts/AuthContext";
import { PrivateNav, PublicNav } from "../../Menu";
import SearchForm from "../../SearchForm/SearchForm";

export default function Header() {  
>>>>>>> freemanupdate

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
<<<<<<< HEAD
            <NavLink to="/signin">{/* <PersonOutlineIcon /> */}</NavLink>
          </div>
          <div>
            <NavLink to="/myCart">
              <CartIcon/>
=======
            <NavLink to="/signin"></NavLink>
          </div>
          <div>
            <NavLink to="/myCart">
              <ShoppingCartIcon />
              <p id="shopping-cart-count">{totalQuantities}</p>
>>>>>>> freemanupdate
            </NavLink>
          </div>
        </div>
       
      </div>
      <div> <Navigation />
      </div>

<<<<<<< HEAD
      <div className="dropdown-nav">
        <div>
          <Button id="dropdown-basic-button" title="All">
            <a href="/">Home</a>
          </Button>
        </div>
        <div>
          <NavLink to="/all-products" id="dropdown-basic-button" title="All">
            All
          </NavLink>
        </div>
        <div>
          <DropdownButton id="dropdown-basic-button" title="New Arrivals">
            <div>
              <Dropdown.Item href="#/action-1">Clothes</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Shoes</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Brands</Dropdown.Item>
            </div>
          </DropdownButton>
        </div>
        <div>
          <DropdownButton id="dropdown-basic-button" title="Men">
            <Dropdown.Item href="#/action-1">Clothes</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Shoes</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Brands</Dropdown.Item>
          </DropdownButton>
        </div>
        <div>
          <DropdownButton id="dropdown-basic-button" title="Women">
            <Dropdown.Item href="#/action-1">Clothes</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Shoes auction</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Brands</Dropdown.Item>
          </DropdownButton>
        </div>
        <div>
          <DropdownButton id="dropdown-basic-button" title="Children">
            <Dropdown.Item href="#/action-1">Clothes</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Shoes</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Brands</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
=======
     
     
      
>>>>>>> freemanupdate
    </div>
  );
}
