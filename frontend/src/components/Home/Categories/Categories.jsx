import React from "react";
import { Link } from "react-router-dom";
import "./Categories.modules.css";

const Categories = () => {
  return (
    <div class="container">
      <Link to="/men-cloths">
        <div class="bg-items">
          <div
            class="items"
            style={{
              backgroundImage:
                "url(" +
                "http://cdn.shopify.com/s/files/1/0849/8112/products/Women-Business-Pant-Suits.jpg?v=1647376493" +
                ")",
              width: "100%",
              height: "65vh",
            }}
          >
            <div class="one"></div>
            <div class="details">
              <h2>MEN</h2>
            </div>
          </div>
        </div>
      </Link>

      <Link to="/women-cloths">
        <div class="bg-items">
          <div
            class="items"
            style={{
              backgroundImage:
                "url(" +
                "http://cdn.shopify.com/s/files/1/0849/8112/products/Women-Business-Pant-Suits.jpg?v=1647376493" +
                ")",
              width: "100%",
              height: "65vh",
            }}
          >
            <div class="two"></div>
            <div class="details">
              <h2>WOMEN</h2>
            </div>
          </div>
        </div>
      </Link>

      <Link to="/children-cloths">
        <div class="bg-items">
          <div
            class="items"
            style={{
              backgroundImage:
                "url(" +
                "http://cdn.shopify.com/s/files/1/0849/8112/products/Women-Business-Pant-Suits.jpg?v=1647376493" +
                ")",
              width: "100%",
              height: "65vh",
            }}
          >
            <div class="three"></div>
            <div class="details">
              <h2>CHILDREN</h2>
            </div>
          </div>
        </div>
      </Link>

      <Link to="/men-shoes">
        <div class="bg-items">
          <div
            class="items"
            style={{
              backgroundImage:
                "url(" +
                "http://cdn.shopify.com/s/files/1/0849/8112/products/Women-Business-Pant-Suits.jpg?v=1647376493" +
                ")",
              width: "100%",
              height: "65vh",
            }}
          >
            <div class="four"></div>
            <div class="details">
              <h2>MEN</h2>
            </div>
          </div>
        </div>
      </Link>

      <Link to="/women-shoes">
        <div class="bg-items">
          <div
            class="items"
            style={{
              backgroundImage:
                "url(" +
                "http://cdn.shopify.com/s/files/1/0849/8112/products/Women-Business-Pant-Suits.jpg?v=1647376493" +
                ")",
              width: "100%",
              height: "65vh",
            }}
          >
            <div class="five"></div>
            <div class="details">
              <h2>MEN</h2>
            </div>
          </div>
        </div>
      </Link>

      <Link to="/children-shoes">
        <div class="bg-items">
          <div
            class="items"
            style={{
              backgroundImage:
                "url(" +
                "http://cdn.shopify.com/s/files/1/0849/8112/products/Women-Business-Pant-Suits.jpg?v=1647376493" +
                ")",
              width: "100%",
              height: "65vh",
            }}
          >
            <div class="six"></div>
            <div class="details">
              <h2>MEN</h2>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Categories;
