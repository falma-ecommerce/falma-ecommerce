import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BsBagCheckFill } from "react-icons/bs";
import { CartContext } from "../../contexts/CartContext";
import { fireworksConfetti } from "../Utility/fireworksConfetti";
import "./SuccessFullOrder.css"

const SuccessFullOrder = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } =
    useContext(CartContext);

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    fireworksConfetti();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:order@felma.com">
            order@felma.com
          </a>
        </p>
        <Link to="/all-products">
          <button type="button" className="button">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessFullOrder;
