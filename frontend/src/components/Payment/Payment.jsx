import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
// import axios from "axios";
import { Link } from "react-router-dom";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import axios from "../../components/Utility/axiosInstance";
import"./Payment.css"

const Payment = () => {
  const { totalPrice, itemPercentage, shipment, itemTotal } =
    useContext(CartContext);

    const [shipmentInfo, setShipmentInfo] = useState (null)

  const [{ isPending }] = usePayPalScriptReducer();

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


  const purchaseProduct = {
    description: "Thank you for your order",
    price: {itemTotal},
  };
  console.log(itemTotal);
  const shippingLinkStyle = {
    border: "0.1rem solid black",
    textAlign: "center",
    padding: "0.6rem 0",
    margin: "0.8rem 0",
    width: "100%",
    borderRadius: "0.3rem",
  };

  return (
    <div className="shipping-container">
      <div>
        {shipmentInfo != null ? (
          <div> 
            <p>{shipmentInfo.fullName}</p>
            <p>{shipmentInfo.address}</p>
            <p>{shipmentInfo.city}</p>
            <p>{shipmentInfo.postCode}</p>
            <p>{shipmentInfo.county}</p>
          </div>
        ) : (
          <p>No shipping address found, Filling in your shipping detail please</p>
        )}
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
        <div>
          {isPending ? <div className="spinner" /> : null}
          <PayPalButtons purchaseProduct={purchaseProduct} />
        </div>
      </div>
    </div>
  );
};

export default Payment;
