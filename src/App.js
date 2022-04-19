import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./Pages/ProductPage/ProductPage";
import NavBar from "./Containers/NavBar/NavBar";
import { Main } from "./Pages/Main/Main";
import CartPage from "./Pages/CartPage/CartPage";

import "./App.css";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <React.Suspense fallback={<div className="spinner"></div>}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/Products/:id" element={<ProductPage />} />
          </Routes>
        </React.Suspense>
      </div>
    );
  }
}

export default App;
