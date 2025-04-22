import { useState } from "react";
import "./App.css";
import Signup from "./Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { useLocation } from "react-router";

import Login from "./Login";
import HomePage from "./component/HomePage";
import AddToCard from "./component/cardComponent/AddToCard";
import NavBar from "./component/NavBar";
import AddToCardComponent from "./component/AddToCardComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/addToCard" element={<AddToCardComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default withTranslation()(App);
