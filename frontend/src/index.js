// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//     <App />, document.querySelector('#root')
// );

import App from "./App";
import { createRoot } from "react-dom/client";



createRoot(document.getElementById("root")).render(<App tab="home" />);
