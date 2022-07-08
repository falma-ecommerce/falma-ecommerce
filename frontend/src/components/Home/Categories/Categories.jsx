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
                "https://img01.ztat.net/article/spp-media-p1/c335a45df8d1426fbdcecb8eaf9dc5ba/53d764af5aad4167819846e85771c60c.jpg?imwidth=400" +
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
                "https://img01.ztat.net/article/spp-media-p1/cb5586ee0ea54d9fb5899574abef1d59/d630ce0d90154cd291f0eb48b604cd29.jpg?imwidth=400" +
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
                "https://img01.ztat.net/article/spp-media-p1/5a8718cd90074055a92e09b5b3a23bbe/348dd2baae514da89c21fb6e5174fadf.jpg?imwidth=420" +
                ")",
              minWidth: "19vw",
              height: "60vh",
            }}
          >
            <div className="three"></div>
            <div className="details">
              <h2>KIDS</h2>
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
                "https://img01.ztat.net/article/spp-media-p1/6eb1c861b03044c69a2334f806d1c41a/34749447eaf34610b4bf09adbb5ef239.jpg?imwidth=400" +
                ")",
              minWidth: "19vw",
              height: "60vh",
            }}
          >
            <div className="four"></div>
            <div className="details">
              <h2>MEN SHOES</h2>
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
                "https://img01.ztat.net/article/spp-media-p1/f374c54bc39b4eef9f495ec86d8d4887/f4c68990c5444735b67964e9d7cf7436.jpg?imwidth=430" +
                ")",
              minWidth: "19vw",
              height: "60vh",
            }}
          >
            <div className="five"></div>
            <div className="details">
              <h2>WOMEN SHOES</h2>
            </div>
          </div>
        </div>
      </Link>

      <Link to="/kids-shoes">
        <div className="bg-items">
          <div
            className="items"
            style={{
              backgroundImage:
                "url(" +
                "https://img01.ztat.net/article/spp-media-p1/14399ddb1dff4a1083807666555f5184/a6b181af58c44e38876b365b88d0c72d.jpg?imwidth=400" +
                ")",
              minWidth: "19vw",
              height: "60vh",
            }}
          >
            <div className="six"></div>
            <div className="details">
              <h2>KIDS SHOES</h2>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Categories;
