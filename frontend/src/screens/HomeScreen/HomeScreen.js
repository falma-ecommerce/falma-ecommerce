import React from 'react'
import Categories from '../../components/Home/Categories/Categories'
import Footer from '../../components/Home/Footer/Footer'
import Header from '../../components/Home/Header/Header'
import ControlledCarousel from '../../components/Home/HomeCarousel/ControlledCarousel'
import ShoesCarousel from '../../components/Home/ShoesCarousel/ShoesCarousel'
import Trending from '../../components/Home/Trending/Trending'


export default function HomeScreen() {
  return (
    <div>
      <Header />
      <ControlledCarousel />
      <Categories />
      <Trending />
      <ShoesCarousel />
      <Footer />
      
    </div>
  )
}
