import React from "react";
import { Link } from "react-router-dom";
import mensuit from "../../../components/images/mensuit1.webp"
import menshoes from "../../../components/images/menshoes1.webp"
import womensuit from "../../../components/images/womensuit1.webp"
import womenshoes from "../../../components/images/womenshoes1.webp"
import kids from "../../../components/images/kids1.webp"
import kidshoes from "../../../components/images/kidshoes1.webp"
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
               `url(${mensuit})`,
              minWidth: "19vw",
              backgroundPosition: "center",
              backgroundSize: "cover",
              
              height: "60vh",
            }}
            >
            <div className="one"></div>
            <div className="details">
              <h3>MEN</h3>
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
              `url(${womensuit})`,
             minWidth: "19vw",
             height: "60vh",
             backgroundPosition: "center",
             backgroundSize: "cover",
            }}
          >
            <div className="two"></div>
            <div className="details">
              <h3>WOMEN</h3>
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
              `url(${kids})`,
             minWidth: "19vw",
             height: "60vh",
             backgroundPosition: "center",
             backgroundSize: "cover",
            }}
          >
            <div className="three"></div>
            <div className="details">
              <h3>KIDS</h3>
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
              `url(${menshoes})`,
             minWidth: "19vw",
             height: "60vh",
             backgroundPosition: "center",
             backgroundSize: "cover",
            }}
          >
            <div className="four"></div>
            <div className="details">
              <h3>MEN SHOES</h3>
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
              `url(${womenshoes})`,
             minWidth: "19vw",
             height: "60vh",
             backgroundPosition: "center",
             backgroundSize: "cover",
            }}
          >
            <div className="five"></div>
            <div className="details">
              <h3>WOMEN SHOES</h3>
            </div>
          </div>
        </div>
      </Link>

      <Link to="/sport-shoes">
        <div className="bg-items">
          <div
            className="items"
            style={{
              backgroundImage:
              `url(${kidshoes})`,
             minWidth: "19vw",
             height: "60vh",
             backgroundPosition: "center",
             backgroundSize: "cover",
            }}
          >
            <div className="six"></div>
            <div className="details">
              <h3>KIDS SHOES</h3>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Categories;
