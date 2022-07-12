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
            // "https://img01.ztat.net/article/spp-media-p1/c335a45df8d1426fbdcecb8eaf9dc5ba/53d764af5aad4167819846e85771c60c.jpg?imwidth=400" +
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
              `url(${womensuit})`,
             minWidth: "19vw",
             height: "60vh",
             backgroundPosition: "center",
             backgroundSize: "cover",
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
              `url(${kids})`,
             minWidth: "19vw",
             height: "60vh",
             backgroundPosition: "center",
             backgroundSize: "cover",
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
              `url(${menshoes})`,
             minWidth: "19vw",
             height: "60vh",
             backgroundPosition: "center",
             backgroundSize: "cover",
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
              `url(${womenshoes})`,
             minWidth: "19vw",
             height: "60vh",
             backgroundPosition: "center",
             backgroundSize: "cover",
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
              `url(${kidshoes})`,
             minWidth: "19vw",
             height: "60vh",
             backgroundPosition: "center",
             backgroundSize: "cover",
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
