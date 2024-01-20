import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.scss";
import MenuColumnLeft from "../MenuColumnLeft/MenuColumnLeft";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import MenuColumnRight from "../MenuColumnRight/MenuColumnRight";
import PopupForm from "../PopupForm/PopupForm";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState();

  function handlePopupClose() {
    setIsPopupOpen(false);
  }

  return (
    <div className="page__content">
      <MenuColumnLeft />
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<AboutMe />}>
            <Route path="main-info" element={<AboutMe />} />
            <Route path="grade-documents" element={<AboutMe />} />
            <Route path="education" element={<AboutMe />} />
          </Route>
          <Route path="/documents" element={<AboutMe />} />
        </Routes>
      </main>

      <Routes>
        <Route path="/" element={<MenuColumnRight />} />
        <Route path="/documents" element={<MenuColumnRight />} />
        <Route path="main-info" element={<MenuColumnRight />} />
        <Route path="grade-documents" element={<MenuColumnRight />} />
      </Routes>

      <div className="rrr"></div>

      <PopupForm isOpen={isPopupOpen} onClose={handlePopupClose} />
    </div>
  );
}

export default App;
