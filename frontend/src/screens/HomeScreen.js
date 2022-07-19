import React from "react";
import { Helmet } from "react-helmet-async";

import Categories from "../components/Home/Categories/Categories";
import Footer from "../components/Home/Footer/Footer";
// import Header from '../../components/Home/Header/Header'
import ControlledCarousel from "../components/Home/HomeCarousel/ControlledCarousel";

import ShoesCarousel from "../components/Home/ShoesCarousel/ShoesCarousel";
import Trending from "../components/Home/Trending/Trending";
import "./home.css";

export default function HomeScreen() {
  return (
    <div className="home-screen">
      <Helmet>
        <title>Falma Shop</title>
      </Helmet>
      <ControlledCarousel />
      <Categories />
      <Trending />
      <ShoesCarousel />

      <Footer />
    </div>
  );
}
