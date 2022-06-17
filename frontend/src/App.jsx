import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";

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
            <Route path="/menCategory" element={<MenCategory />} />
            <Route path="/womenCategory" element={<WomenCategory />} />
            <Route path="/kidsCategory" element={<KidsCategory />} />
          </Routes>
          
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
