import React, { useState, useContext, useEffect } from "react";
// import { CartContext } from "../../contexts/CartContext";
import axios from "axios";
// import { FaCcPaypal, FaCcVisa, FaCcApplePay, FaCcAmex } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CheckoutContext } from "../../contexts/CheckoutContext";
import PaymentDetail from "../Utility/PaymentDetail";
import ShippingAddressUtil from "../ShippingAddressUtil/ShippingAddressUtil";
import PaymentMethods from "../Utility/PaymentMethods";
import "./ShippingAddress.module.css";

const ShippingAddress = () => {
  // const { totalPrice, itemPercentage, shipment, itemTotal } =
  //   useContext(CartContext);

  const { checkoutAddresses, setCheckoutAddresses } =
    useContext(CheckoutContext);

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
      alert(`Please signing in or sign up before filling in your Shipping details `);
    }
  };
  const loadShippingDetails = async () => {
    try {
      const response = await axios.get("/api/users/getShippingAddress");
      setCheckoutAddresses(response.data.shippingAddress);
      console.log("response ", response);
    } catch (error) {
      console.error("An error happened", error);
      alert(`Please signing in or sign up before filling in the Shipping details`);
    }
  };
  console.log(checkoutAddresses);
  useEffect(() => {
    loadShippingDetails();
  }, []);

  const shippingContainerStyle = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: "0.3rem",
    margin: "2rem 3rem",
    borderRadius: "0.3rem",
    boxShadow: "inset 0 0 10px",
    fontSize: "1.3rem",
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
    margin: "0.5rem 38%",
  };

  return (
    <div style={shippingContainerStyle}>
      <div>
        {checkoutAddresses && checkoutAddresses.length < 1 ? (
          <form onSubmit={handleSubmit} style={styleForm}>
            <h1>Shipping Detail</h1>
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
              <button type="submit" style={buttonStyle}>
                Submit
              </button>
            </div>
          </form>
        ) : (
          <div>
            <ShippingAddressUtil />
          </div>
        )}
      </div>
      <div>
        <PaymentDetail />
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
          <PaymentMethods />
        </div>
      </div>
    </div>
  );
};

export default ShippingAddress;
