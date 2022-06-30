import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { DropdownButton, Dropdown, Button } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Paper, TextField } from "@material-ui/core";
import "./Header.modules.css";
import { AuthContext } from "../../../contexts/AuthContext";
import { PrivateNav, PublicNav } from "../../Navigation";

export default function Header() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <div>
      <div className="shipping-info">
        <Marquee className="marquee">
          <h6>FREE STANDARD SHIPPING ON ORDERS OVER €75</h6>
        </Marquee>
      </div>
      <div className="nav-info">
        <div className='searchForm' >
          <Paper style={{ padding: "0 2rem" }}>
            <form>
              <TextField fullWidth label="Search...." />
            </form>
          </Paper>
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
            <NavLink to="/signin">
              <PersonOutlineIcon />
            </NavLink>
          </div>
          <div>
            <NavLink to="/myCart">
              <ShoppingCartIcon />             
            </NavLink>
          </div>
        </div>
      </div>

      <div className="dropdown-nav">
      <div>
          <Button id="dropdown-basic-button" title="All">
            <a href="/">Home</a>
          </Button>
        </div>
        <div>
          <Button id="dropdown-basic-button" title="All">
            <a href="/all-products">All</a>
          </Button>
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
    </div>
  );
}
