import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import { Outlet, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/content/about/About";
import Delivery from "./components/content/delivery/Delivery";
import Promo from "./components/content/promo/Promo";
import Map from "./components/content/map/Map";
import Reviews from "./components/content/reviews/Reviews";
import MenuElement from "./components/menuElement/MenuElement";
import BusketContent from "./components/content/busketContent/BusketContent";
import SearchContent from "./components/content/searchContent/SearchContent";
import Main from "./components/main/Main";

function Layout() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery" element={<Delivery />} />
        {/* <Route path="/promo" element={<Promo />} /> */}
        <Route path="/map" element={<Map />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/rolls" element={<MenuElement kind="rolls" />} />
        <Route path="/soups" element={<MenuElement kind="soups" />} />
        <Route path="/sushi" element={<MenuElement kind="sushi" />} />
        <Route path="/salads" element={<MenuElement kind="salads" />} />
        <Route path="/sets" element={<MenuElement kind="sets" />} />
        <Route path="/busket" element={<BusketContent />} />
        <Route path="/search" element={<SearchContent />} />
      </Route>
    </Routes>
  );
}
