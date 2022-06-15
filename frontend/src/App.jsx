import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* <header>
        <Link to="/">Falma</Link>
      </header> */}
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
          
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
