import React, { useContext, useRef } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShopping,
} from "react-icons/ai";
import "./Cart.modules.css";
import PaymentDetail from "../Utility/PaymentDetail";
import PaymentMethods from "../Utility/PaymentMethods";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../contexts/AuthContext";

const Cart = () => {
  const cartRef = useRef();
  const {
    cartItems,
    totalQuantities,
    removeItemFromCart,
    toggleCartItemQuantity,
  } = useContext(CartContext);

  const { loggedIn } = useContext(AuthContext);

  const linkStyle = {
    border: "0.1rem solid black",
    textAlign: "center",
    padding: "0.3rem 0",
    margin: "0.8rem 0",
    width: "100%",
    borderRadius: "0.3rem",
  };

  return (
    <>
      <div className="cart-wrapper" ref={cartRef}>
        <div className="cart-detail">
          <div className="item-total">
            <div className="product-container">
              <h3 className="cart-num-items">
                Item in Cart ({totalQuantities})
              </h3>
              {cartItems.length >= 1 &&
                cartItems.map((item) => (
                  <div className="item" key={item.id}>
                    <img
                      src={`https://${item.media.images[0].url}`}
                      style={{ width: "15vh", padding: "0 1rem" }}
                      alt="Article not no longer in stock"
                    />
                    <div className="item-desc">
                      <div className="flex-top">
                        <p>{item.name}</p>
                        <p>{item.price.current.text}</p>
                      </div>

                      <div className="flex bottom">
                        <div>
                          <p className="quantity-desc">
                            <span
                              className="minus"
                              onClick={() =>
                                toggleCartItemQuantity(item.id, "dec")
                              }
                            >
                              <AiOutlineMinus />
                            </span>
                            <span className="quantity">{item.quantity}</span>
                            <span
                              className="plus"
                              onClick={() =>
                                toggleCartItemQuantity(item.id, "inc")
                              }
                            >
                              <AiOutlinePlus />
                            </span>
                          </p>
                        </div>
                        <button
                          type="button"
                          className="remove-item"
                          onClick={() => removeItemFromCart(item)}
                        >
                          <FontAwesomeIcon
                            icon={faTrash}
                            className="trashIcon"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <hr />
            <div className="total-item">
              {cartItems.length >= 1 && (
                <div className="cart-bottom">
                  <PaymentDetail />
                  <div style={linkStyle}>
                    <Link to="/all-products" className="checkout">
                      Continue Shopping
                    </Link>
                  </div>
                  <div style={linkStyle}>
                    {loggedIn ? (
                      <Link to="/shipping-address" className="checkout">
                      Proceed to payment
                    </Link>
                    ) : (
                      <Link to="/signin" className="checkout">
                        Proceed to sign in or sign up
                      </Link>
                    )}
                  </div>
                  <PaymentMethods />
                </div>
              )}
            </div>
          </div>
          <div className="cart-container">
            {cartItems.length < 1 && (
              <div className="empty-cart">
                <AiOutlineShopping size={150} />
                <h3>Your shopping bag is empty</h3>
                <Link className="shopping" to="/all-products">
                  Continue Shopping
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
