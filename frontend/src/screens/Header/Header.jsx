import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { DropdownButton, Dropdown } from "react-bootstrap";

import "./Header.modules.css";

export default function Header() {
  return (
    <div>
      <div className="shipping-info">
        <h4>FREE STANDARD SHIPPING ON ORDERS OVER €75</h4>
      </div>
      <div className="nav-info">
        <div className="header_search">
          <input type="text" className="header_inputSearch" />
          <SearchIcon className="header_searchIcon" />
        </div>

        <div className="websiteName">
          <NavLink to="/homeScreen">
            <h1> FALMA</h1>
          </NavLink>
        </div>
        <div className="login-cart">
          <div>
            <NavLink to="/login">
              <PersonOutlineIcon />
            </NavLink>
          </div>
          <div>
            <NavLink to="/basket">
              <ShoppingCartIcon />
            </NavLink>
          </div>
        </div>
        <div className="dropdown-nav">
          <div>
            <DropdownButton id="dropdown-basic-button" title="New Arrivals">
              <Dropdown.Item href="#/action-1">Clothes</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Shoes</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Brands</Dropdown.Item>
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
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </div>
          <div>
            <DropdownButton id="dropdown-basic-button" title="Children">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      </div>
    </div>
  );
}
