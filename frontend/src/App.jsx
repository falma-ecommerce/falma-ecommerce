import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import AllProductScreen from "./screens/AllProductScreen/AllProductsScreen"
import ProductDetailsScreen from "./screens/ProductDetailsScreen/ProductDetailScreen"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { MenCategory } from "./components/apiRoutes/Men/MenAll";
import { WomenCategory } from "./components/apiRoutes/Women/WomenAll";
import { KidsCategory } from "./components/apiRoutes/Kids/KidsAll";


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/all-products" element={<AllProductScreen />}/>
            <Route path="/product-details/:id" element={<ProductDetailsScreen />}/>
          </Routes> 
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
