import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Review from "./Pages/Review";
import Photos from "./Pages/Photos";
import Menu from "./Pages/Menu";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <Review />
      <Photos />
      <Menu />
    </BrowserRouter>
  );
}
