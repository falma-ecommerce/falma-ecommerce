import React, { useContext, useRef } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { FaCcPaypal, FaCcVisa, FaCcApplePay, FaCcAmex } from "react-icons/fa";
import "./Cart.modules.css";
// import toast from "react-hot-toast";

const Cart = () => {
  const cartRef = useRef();
  const {
    cartItems,
    addItemToCart,
    totalPrice,
    setShowCart,
    totalQuantities,
    removeItemFromCart,
    toggleCartItemQuantity,
    itemPercentage,
    shipment,
    itemTotal,
  } = useContext(CartContext);

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
                      style={{ width: "15vh" }}
                      alt="Article not no longer in stock"
                    />
                    <div className="item-desc">
                      <div className="flex top">
                        <p>{item.price.current.text}</p>
                        <p>{item.name}</p>
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
                            {/* <span className="num" onClick=""> */}
                            {item.quantity}
                            {/* </span> */}
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
                          <TiDeleteOutline />
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
                  <h3>Order Overview</h3>
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
                  <button className="checkout">CHECKOUT</button>
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
