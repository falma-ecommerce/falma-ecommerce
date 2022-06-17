import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
<<<<<<< HEAD

=======
import AllProductScreen from "./screens/AllProductScreen/AllProductsScreen"
import ProductDetailsScreen from "./screens/ProductDetailsScreen/ProductDetailScreen"
>>>>>>> 451b6bab585018dfbb156f1038bcffdc1d86b8b8
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
<<<<<<< HEAD
            <Route path="/menCategory" element={<MenCategory />} />
            <Route path="/womenCategory" element={<WomenCategory />} />
            <Route path="/kidsCategory" element={<KidsCategory />} />
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
