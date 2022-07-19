import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../components/Utility/axiosInstance";
import "./Payment.css";
import ShippingAddressUtil from "../ShippingAddressUtil/ShippingAddressUtil";
import Paypal from "./Paypal";
import PaymentDetail from "../Utility/PaymentDetail";

const Payment = () => {
  const [setShipmentInfo] = useState(null);
  const [checkout, setCheckOut] = useState(false);

  const getShipmentInfo = async () => {
    try {
      const res = await axios.get("/api/users/getShippingAddress");

      setShipmentInfo(res.data.shippingDetail);
      console.log(res.data.shippingDetail);
    } catch (error) {
      console.error("An error happened", error);
    }
  };

  useEffect(() => {
    getShipmentInfo();
  }, []);

  const shippingLinkStyle = {
    border: "0.1rem solid black",
    textAlign: "center",
    padding: "0.6rem 0",
    margin: "0.8rem 0",
    width: "100%",
    borderRadius: "0.3rem",
  };

  return (
    <div className="shipping-container" >
      <div className="shipping-payment">
        {<ShippingAddressUtil />}
      </div>
      <div className="shipping-payment">
        <PaymentDetail />
        <div style={shippingLinkStyle}>
          <Link to="/all-products" className="checkout">
            Continue Shopping
          </Link>
        </div>
        <div className="paypal">
          {checkout ? (
            <Paypal />
          ) : (
            <button
              onClick={() => {
                setCheckOut(true);
              }}
            >
              Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payment;
