import React, { useContext } from "react";
import axios from "../../components/Utility/axiosInstance";
import { AuthContext } from "../../contexts/AuthContext";
import { CartContext } from "../../contexts/CartContext";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "material-react-toastify";
import Footer from "../../components/Home/Footer/Footer";

export default function SigninScreen() {
  const { handleLogin } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await axios.post("/api/users/signin", data);
      console.log("response ", response);

      handleLogin(true, response.data.user);
      cartItems.length >= 1 ? navigate("/shipping-address") : navigate("/");
      toast.success("You are Welcome Back");
    } catch (error) {
      toast.error(
        "Sorry! you entered wrong username or password. Please try again"
      );
    }
  };

  return (
    <main>
      <div className="register-container align-items-center p-3">
        <h3 className="text-center">You are Welcome Back </h3>
        <div className=" d-flex justify-content-around align-items-center flex-wrap">
          <form
            className=" d-flex flex-column justify-content-center align-items-center"
            onSubmit={handleSubmit}
          >
            <label>
              Email
              <input
                name="email"
                className="form-control"
                type="email"
                required={true}
              />
            </label>
            <label>
              Password
              <input
                name="password"
                className="form-control"
                type="password"
                required={true}
              />
            </label>

            <div className="p-3">
              <button className="btn btn-primary w-100 ">Sign In</button>
            </div>
          </form>
          <div className="p-2 text-center">
            <h5>I'm new here</h5>
            <NavLink to="/signup">
              <button className="btn btn-primary">Please Sign Up</button>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
