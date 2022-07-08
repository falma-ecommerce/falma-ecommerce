import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Home/Header/Header";
import Products from "./components/Products/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import SignupScreen from "./screens/SignupScreen/SignupScreen";
import SignoutScreen from "./screens/SignupScreen/SignoutScreen";
import ProfileScreen from "./screens/SignupScreen/ProfileScreen";
import SigninScreen from "./screens/SignupScreen/SigninScreen";
import Shipping from "./components/Home/Footer/Footer links/Shipping";
import Terms from "./components/Home/Footer/Footer links/Terms";
import Privacy from "./components/Home/Footer/Footer links/Privacy";
import Refund from "./components/Home/Footer/Footer links/Refund";
import Vision from "./components/Home/Footer/Footer links/Vision";
import Mission from "./components/Home/Footer/Footer links/Mission";
import "./App.css";

// const App = () => {
//   return (
//     <AuthProvider>
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./contexts/CartContext";

const App = () => {
  return (

    <CartProvider>
      <AuthProvider>
      <BrowserRouter>
        <Header />
        <div>
          <main>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/all-products" element={<Products q="all" />} />
              <Route path="/menCategory" element={<Products q="men" />} />
              <Route path="/womenCategory" element={<Products q="women" />} />
              <Route path="/kidsCategory" element={<Products q="kids" />} />
              <Route path="/men/cloths" element={<Products q="men/cloths" />} />
              <Route
                path="/women/cloths"
                element={<Products q="women/cloths" />}
              />
              <Route
                path="/kids/cloths"
                element={<Products q="kids/cloths" />}
              />
              <Route path="/trending" element={<Products q="trending" />} />
              <Route path="/men-shoes" element={<Products q="men-shoes" />} />
              <Route
                path="/women-shoes"
                element={<Products q="women-shoes" />}
              />
              <Route
                path="/sport-shoes"
                element={<Products q="sport-shoes" />}
              />
              <Route path="/product-details/:id" element={<ProductDetails />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/signout" element={<SignoutScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/myCart" element={<Cart />} />
              <Route path="/shipping" element={<Shipping/>} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/refund" element={<Refund />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/vision" element={<Vision />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </AuthProvider>
    </CartProvider>
  );
};

export default App;
