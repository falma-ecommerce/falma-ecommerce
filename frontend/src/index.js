// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//     <App />, document.querySelector('#root')
// );

import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <App tab="home" />
  </HelmetProvider>
);
