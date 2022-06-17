import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
<<<<<<< HEAD
import WomenCloths from "./components/Home/Categories/women/WomenCloth";
=======
import AllProductScreen from "./screens/AllProductScreen/AllProductsScreen"
import ProductDetailsScreen from "./screens/ProductDetailsScreen/ProductDetailScreen"
>>>>>>> 451b6bab585018dfbb156f1038bcffdc1d86b8b8
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
<<<<<<< HEAD
            <Route path="/women-cloths" element={<WomenCloths />} />
          </Routes>
=======
            <Route path="/all-products" element={<AllProductScreen />}/>
            <Route path="/product-details/:id" element={<ProductDetailsScreen />}/>
          </Routes> 
>>>>>>> 451b6bab585018dfbb156f1038bcffdc1d86b8b8
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
