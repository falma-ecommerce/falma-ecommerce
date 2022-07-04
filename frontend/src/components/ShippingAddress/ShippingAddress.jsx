import React, { useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import axios from "axios";
import { FaCcPaypal, FaCcVisa, FaCcApplePay, FaCcAmex } from "react-icons/fa";
import "./ShippingAddress.module.css";
import { Link } from "react-router-dom";

const ShippingAddress = () => {
  const { totalPrice, itemPercentage, shipment, itemTotal } =
    useContext(CartContext);

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    postCode: "",
    country: "",
  });

  const { fullName, address, city, postCode, country } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.target.reset();

    const newShipping = {
      fullName,
      address,
      city,
      postCode,
      country,
    };
    alert(
      `Your order will be shipped out within 24 hours.\nIncase of any changes in the shipping address, notify us immediately,`
    );

    try {
      const response = await axios.post("/api/users/shipping", newShipping);
      console.log("response ", response);
      alert("Shipping address registration was successful");
    } catch (error) {
      console.error("An error happened", error);
      alert(` Shipping address registration failed`);
    }
  };

  const shippingContainerStyle = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: "0.3rem",
    margin: "0.8rem",
    borderRadius: "0.3rem",
    border: "1rem solid black",
    fontSize: "1.3rem"
  };

  const styleForm = {
    minWidth: "40vw",
  };

  const shippingLinkStyle = {
    border: "0.1rem solid black",
    textAlign: "center",
    padding: "0.6rem 0",
    margin: "0.8rem 0",
    width: "100%",
    borderRadius: "0.3rem",
  };

  const buttonStyle = {
    padding: "0.7rem 1rem",
    margin: "0.5rem 38%"
  }

  return (
    <div style={shippingContainerStyle}>
      <div>
        <form onSubmit={handleSubmit} style={styleForm}>
          <h1>Sipping Detail</h1>
          <div className="shipping-address">
            <h5>
              <label>Full Name</label>
            </h5>
            <input
              onChange={onChange}
              type="text"
              autoComplete="fullName"
              name="fullName"
              required={true}
            />
            <h5>
              <label>Address</label>
            </h5>
            <input
              onChange={onChange}
              type="text"
              autoComplete="address"
              name="address"
              required={true}
            />
            <h5>
              <label>city</label>
            </h5>
            <input
              onChange={onChange}
              type="text"
              autoComplete="city"
              name="city"
              required={true}
            />
            <h5>
              <label>Post Code</label>
            </h5>
            <input
              onChange={onChange}
              type="number"
              autoComplete="postCode"
              name="postCode"
              required={true}
            />
            <h5>
              <label>Country</label>
            </h5>
            <input
              onChange={onChange}
              type="text"
              autoComplete="country"
              name="country"
              required={true}
            />
          </div>
          <div className="button-div">
            {" "}
            <button type="submit" style={buttonStyle}>Submit</button>
          </div>
        </form>
      </div>
      <div>
        <h1>Order Overview</h1>
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
        <div style={shippingLinkStyle}>
          <Link to="/all-products" className="checkout">
            Continue Shopping
          </Link>
        </div>
        <div style={shippingLinkStyle}>
          <Link to="/payment" className="checkout">
            Proceed to payment
          </Link>
        </div>

        <div>
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
