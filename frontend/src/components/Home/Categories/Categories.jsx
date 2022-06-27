import React from "react";
import { Link } from "react-router-dom";

import "./Categories.modules.css";

const Categories = () => {
  return (
    <div className="container">
      <Link to="/menCategory">
        <div className="bg-items">
          <div
            className="items"
            style={{
              backgroundImage:
                "url(" +
                "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80" +
                ")",
              minWidth: "19vw",
              height: "60vh",
            }}
          >
            <div className="one"></div>
            <div className="details">
              <h2>MEN</h2>
            </div>
          </div>
        </div>
      </Link>

      <Link to="/womenCategory">
        <div className="bg-items">
          <div
            className="items"
            style={{
              backgroundImage:
                "url(" +
                "http://cdn.shopify.com/s/files/1/0849/8112/products/Women-Business-Pant-Suits.jpg?v=1647376493" +
                ")",
              minWidth: "19vw",
              height: "60vh",
            }}
          >
            <div className="two"></div>
            <div className="details">
              <h2>WOMEN</h2>
            </div>
          </div>
        </div>
      </Link>

      <Link to="/kidsCategory">
        <div className="bg-items">
          <div
            className="items"
            style={{
              backgroundImage:
                "url(" +
                "http://cdn.shopify.com/s/files/1/0849/8112/products/Women-Business-Pant-Suits.jpg?v=1647376493" +
                ")",
              minWidth: "19vw",
              height: "60vh",
            }}
          >
            <div className="three"></div>
            <div className="details">
              <h2>CHILDREN</h2>
            </div>
          </div>
        </div>
      </Link>

      <Link to="/men/cloths">
        <div className="bg-items">
          <div
            className="items"
            style={{
              backgroundImage:
                "url(" +
                "http://cdn.shopify.com/s/files/1/0849/8112/products/Women-Business-Pant-Suits.jpg?v=1647376493" +
                ")",
              minWidth: "19vw",
              height: "60vh",
            }}
          >
            <div className="four"></div>
            <div className="details">
              <h2>MEN CLOTHES</h2>
            </div>
          </div>
        </div>
      </Link>

      <Link to="/women/cloths">
        <div className="bg-items">
          <div
            className="items"
            style={{
              backgroundImage:
                "url(" +
                "http://cdn.shopify.com/s/files/1/0849/8112/products/Women-Business-Pant-Suits.jpg?v=1647376493" +
                ")",
              minWidth: "19vw",
              height: "60vh",
            }}
          >
            <div className="five"></div>
            <div className="details">
              <h2>WOMEN CLOTHES</h2>
            </div>
          </div>
        </div>
      </Link>

      <Link to="/kids/cloths">
        <div className="bg-items">
          <div
            className="items"
            style={{
              backgroundImage:
                "url(" +
                "http://cdn.shopify.com/s/files/1/0849/8112/products/Women-Business-Pant-Suits.jpg?v=1647376493" +
                ")",
              minWidth: "19vw",
              height: "60vh",
            }}
          >
            <div className="six"></div>
            <div className="details">
              <h2>KIDS CLOTHES</h2>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Categories;
