import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Marquee from "react-fast-marquee";
import "./Header.modules.css";
import { AuthContext } from "../../../contexts/AuthContext";
import CartIcon from "../../Utility/cartIcon";
import "./Header.modules.css";
import { PrivateNav, PublicNav } from "../../Menu";
import SearchForm from "../../SearchForm/SearchForm";

export default function Header() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <div>
      <div className="shipping-info">
        <Marquee className="marquee">
          <h6>FREE STANDARD SHIPPING ON ORDERS OVER €75</h6>
        </Marquee>
      </div>
      <div className="nav-info ">
        <Link to="/">
          <img
            className="logo"
            src="../images/FullLogo.png"
            alt="logo"
          />
        </Link>
        <div className="searchForm">
          <SearchForm />
        </div>

        <div className="websiteName">
          <NavLink to="/">
            <h1> FALMA Shop</h1>
          </NavLink>
        </div>
        <div className="toggleNav" >
          {loggedIn ? <PrivateNav /> : <PublicNav />}
        </div>
        <div className="login-cart">
          <div className="loginIcon">
            <NavLink to="/signin"></NavLink>
          </div>
          <div>
            <NavLink to="/myCart">
              <CartIcon />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
