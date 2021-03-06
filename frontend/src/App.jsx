import React, { Suspense } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
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
import TeamMember from "./components/Home/Footer/Footer links/TeamMembers";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./contexts/CartContext";
import ShippingAddress from "./components/ShippingAddress/ShippingAddress";
import Payment from "./components/Payment/Payment";
import SuccessFullOrder from "./components/SuccessFullOrder/SuccessFullOrder";
import { CheckoutProvider } from "./contexts/CheckoutContext";
import SearchContext from "./contexts/SearchContext";
import SearchProduct from "./components/SearchProduct/SearchProduct";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Home/Header/Navigation";
import Scroll from "./components/Home/scroll/Scroll";

const App = () => {
  return (
    <SearchContext>
      <CartProvider>
        <CheckoutProvider>
          <AuthProvider>
            <BrowserRouter>
              <Header />
              <Navigation />
              <div>
                <main>
                  <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route
                      path="/all-products"
                      element={<Products q="all" />}
                    />
                    <Route
                      path="/search-products"
                      element={<SearchProduct />}
                    />
                    <Route path="/menCategory" element={<Products q="men" />} />
                    <Route
                      path="/womenCategory"
                      element={<Products q="women" />}
                    />
                    <Route
                      path="/kidsCategory"
                      element={<Products q="kids" />}
                    />
                    <Route
                      path="/men/cloths"
                      element={<Products q="men/cloths" />}
                    />
                    <Route
                      path="/women/cloths"
                      element={<Products q="women/cloths" />}
                    />
                    <Route
                      path="/kids/cloths"
                      element={<Products q="kids/cloths" />}
                    />
                    <Route
                      path="/trending"
                      element={<Products q="trending" />}
                    />
                    <Route
                      path="/seasonal"
                      element={<Products q="seasonal" />}
                    />
                    <Route path="/sales" element={<Products q="sales" />} />
                    <Route
                      path="/men-shoes"
                      element={<Products q="men-shoes" />}
                    />
                    <Route
                      path="/men-shirt"
                      element={<Products q="men-shirt" />}
                    />
                    <Route
                      path="/men-t-shirt"
                      element={<Products q="men-t-shirt" />}
                    />
                    <Route
                      path="/hoodies"
                      element={<Products q="men-hoodies" />}
                    />
                    <Route
                      path="/free-style"
                      element={<Products q="men-free-style" />}
                    />
                    <Route
                      path="/women-shoes"
                      element={<Products q="women-shoes" />}
                    />
                    <Route
                      path="/sport-shoes"
                      element={<Products q="sport-shoes" />}
                    />
                    <Route
                      path="/women-bags"
                      element={<Products q="women-bags" />}
                    />
                    <Route
                      path="/product-details/:id"
                      element={<ProductDetails />}
                    />
                    <Route path="/signup" element={<SignupScreen />} />
                    <Route path="/signin" element={<SigninScreen />} />
                    <Route path="/signout" element={<SignoutScreen />} />
                    <Route path="/profile" element={<ProfileScreen />} />
                    <Route path="/myCart" element={<Cart />} />
                    <Route
                      path="/shipping-address"
                      element={<ShippingAddress />}
                    />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/success" element={<SuccessFullOrder />} />
                    <Route path="/shipping" element={<Shipping />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/refund" element={<Refund />} />
                    <Route path="/mission" element={<Mission />} />
                    <Route path="/vision" element={<Vision />} />
                    <Route path="/team" element={<TeamMember />} />
                  </Routes>
                </main>
                <Toaster/>
                <ToastContainer position="top-center" newestOnTop rtl/>
                <Scroll />
              </div>
            </BrowserRouter>
          </AuthProvider>
        </CheckoutProvider>
      </CartProvider>
    </SearchContext>
  );
};

export default App;
