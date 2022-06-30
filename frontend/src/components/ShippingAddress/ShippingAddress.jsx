import React, { useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Helmet } from "react-helmet-async";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCcPaypal, FaCcVisa, FaCcApplePay, FaCcAmex } from "react-icons/fa";
import "./ShippingAddress.module.css";
import { Link } from "react-router-dom";

const ShippingAddress = () => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const { cartItems, totalPrice, itemPercentage, shipment, itemTotal } =
    useContext(CartContext);

  const linkStyle = {
    border: "0.1rem solid black",
    textAlign: "center",
    padding: "0.3rem 0",
    margin: "0.8rem 0",
    width: "100%",
    borderRadius: "0.3rem",
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Helmet>
        <title>Shipping Address</title>
      </Helmet>
      <div className="d-flex justify-content-md-around flex-wrap m-5">
        <div className="shipping">
          <Form onSubmit={submitHandler}>
            <h3 className="my-3">Shipping Details</h3>
            <Form.Group className="mb3" controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
                placeholder="Enter full name"
                required
              />
            </Form.Group>
            <Form.Group className="mb3" controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                placeholder="Enter address"
                required
              />
            </Form.Group>
            <Form.Group className="mb3" controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                onChange={(e) => setCity(e.target.value)}
                value={city}
                placeholder="Enter city"
                required
              />
            </Form.Group>
            <Form.Group className="mb3" controlId="PostalCode">
              <Form.Label>Poster Code</Form.Label>
              <Form.Control
                onChange={(e) => setPostalCode(e.target.value)}
                value={postalCode}
                placeholder="Enter postal code"
                required
              />
            </Form.Group>
            <Form.Group className="mb3" controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Control
                onChange={(e) => setCountry(e.target.value)}
                value={country}
                placeholder="Enter country"
                required
              />
            </Form.Group>
            <div style={linkStyle}>
              <Link to="/shipping-address" className="checkout">
                Continue to payment
              </Link>
            </div>
          </Form>
        </div>
        <div className="total-item">
          <h3>Order Overview</h3>
          {cartItems.length >= 1 && (
            <div className="cart-bottom">
              
              <div className="total">
                <div>Subtotal</div>
                <div>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>
              </div>
              <div className="total">
                <div>Taxes 19 percent%</div>
                <div>
                  <p>${itemPercentage}</p>
                </div>
              </div>
              <div className="total">
                <div>Shipment</div>
                <div>
                  <p>${shipment}</p>
                </div>
              </div>

              <hr />

              <div className="total">
                <div>
                  <h3>TOTAL</h3>
                </div>
                <div>
                  <h3>${itemTotal}</h3>
                </div>
              </div>
              <hr />
              
              <div style={linkStyle}>
                <Link to="/shipping-address" className="checkout">
                  Proceed to checkout
                </Link>
              </div>
            </div>
          )}
          <h5 className="payment-methods">Payment methods</h5>
          <div className="icons">
            <div className="paypal">
              <FaCcPaypal />
            </div>
            <div className="visa">
              <FaCcVisa />
            </div>
            <div className="apple-pay">
              <FaCcApplePay />
            </div>
            <div className="america-express">
              <FaCcAmex />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingAddress;
