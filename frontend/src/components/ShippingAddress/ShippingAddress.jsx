import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CheckoutContext } from "../../contexts/CheckoutContext";
import PaymentDetail from "../Utility/PaymentDetail";
import ShippingAddressUtil from "../ShippingAddressUtil/ShippingAddressUtil";
import PaymentMethods from "../Utility/PaymentMethods";
import { toast } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import "./ShippingAddress.module.css";

const ShippingAddress = () => {
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

    toast.success(
      `Your order will be shipped out within 24 hours.\nIncase of any changes in the shipping address, notify us immediately`
    );
    try {
      const response = await axios.post("/api/users/shipping", newShipping);
      console.log("response ", response);
      if (response.status === 200) {
        loadShippingDetails();
      }
      toast.success(`Shipping address input was successful`);
    } catch (error) {
      console.error("An error happened", error);
      toast.error(
        `Please signing in or sign up before filling in your Shipping details`
      );
    }
  };
  const loadShippingDetails = async () => {
    try {
      const response = await axios.get("/api/users/getShippingAddress");
      setCheckoutAddresses(response.data.shippingAddress);
      console.log("response ", response);
    } catch (error) {
      console.error("An error happened", error);
      toast.error(
        `Please signing in or sign up before filling in the Shipping details`
      );
    }
  };
  console.log(checkoutAddresses);
  useEffect(() => {
    loadShippingDetails();
  }, []);

  const shippingContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "1rem",
    margin: "2rem 3rem",
    borderRadius: "0.3rem",
    fontSize: "1.5rem",
    backgroundImage:
      "url(https://cdn.w600.comps.canstockphoto.com/beautiful-young-woman-in-ripped-leggings-pictures_csp76797384.jpg",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const styleForm = {
    minWidth: "40vw",
  };

  const shippingLinkStyle = {
    textAlign: "center",
    padding: "0.6rem 0",
    margin: "0.8rem 0",
    width: "100%",
    borderRadius: "0.3rem",
    border: "0.1rem solid",
  };

  const buttonStyle = {
    padding: "0.5rem 3rem",
    margin: "0.5rem 38%",
  };
  const shippingInfo = {
    backgroundColor: "white",
    padding: "1rem 3rem",
    border: "0.1rem solid black",
    boxShadow: "inset 0 0 10px",
    borderRadius: "0.6rem",
    margin: "2rem",
  };

  return (
    <div style={shippingContainerStyle}>
      <div style={shippingInfo}>
        {checkoutAddresses && checkoutAddresses.length < 1 ? (
          <form onSubmit={handleSubmit} style={styleForm}>
            <h1 className="shipping-header">Shipping Detail</h1>
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
      <div style={shippingInfo}>
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
