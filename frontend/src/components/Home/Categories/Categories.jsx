import React from "react";
import { Link } from "react-router-dom";
import "./Categories.modules.css";

const Categories = () => {
  return (
    <div className="container">
      <Link to="/men-cloths">
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
            <div className="one"></div>
            <div className="details">
              <h2>MEN</h2>
            </div>
          </div>
        </div>
      </Link>

      <Link to="/women-cloths">
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

      <Link to="/children-cloths">
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

      <Link to="/men-shoes">
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
              <h2>MEN</h2>
            </div>
          </div>
        </div>
      </Link>

      <Link to="/women-shoes">
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
              <h2>MEN</h2>
            </div>
          </div>
        </div>
      </Link>

      <Link to="/children-shoes">
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
              <h2>MEN</h2>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Categories;
