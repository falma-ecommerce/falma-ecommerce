import React, { useState, useContext, useEffect } from "react";
import { CheckoutContext } from "../../contexts/CheckoutContext";
import axios from "axios";

const ShippingDetail = () => {
  const { checkoutAddresses, updateCheckoutAddresses, setCheckoutAddresses } =
    useContext(CheckoutContext);

    const loadShippingDetails = async () => {
        try {
          const response = await axios.get("/api/users/getShippingAddress");
          setCheckoutAddresses(response.data.shippingAddress);
          console.log("response ", response);
        } catch (error) {
          console.error("An error happened", error);
          alert(` Shipping address registration failed`);
        }
      };
      console.log(checkoutAddresses);
      useEffect(() => {
        loadShippingDetails();
      }, []);
    

  return <div></div>;
};

export default ShippingDetail;
