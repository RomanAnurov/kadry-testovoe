import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import "./App.scss";
import MenuColumnLeft from "../MenuColumnLeft/MenuColumnLeft";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import MenuColumnRight from "../MenuColumnRight/MenuColumnRight";
import PopupForm from "../PopupForm/PopupForm";
import PageMainInfo from "../AboutMe/PageMainInfo/PageMainInfo";
import PageGradeDocuments from "../AboutMe/PageGradeDocuments/PageGradeDocuments";
function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function handlePopupOpen() {
    setIsPopupOpen(true);
  }

  function handlePopupClose() {
    setIsPopupOpen(false);
  }

  // Закрытие попаов при клике вне попапа

  const handleMouseClose = useCallback((event) => {
    if (
      event.target.classList.contains("popup") ||
      !event.target.classList.contains("main-info__title")
    ) {
      handlePopupClose();
    }
  }, []);

  useEffect(() => {

    if (isPopupOpen) {
      document.addEventListener("mousedown", handleMouseClose);
    } else {
      document.removeEventListener("mousedown", handleMouseClose);
    }
  }, [isPopupOpen, handleMouseClose,]);
  return (
    <div className="page__content">
      <Header />
      <MenuColumnLeft />
      <main className="main">
        <Routes>
          <Route exact path="/" element={<AboutMe />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/aboutme/main-info" element={<PageMainInfo isOpen={isPopupOpen} onPopupOpen={handlePopupOpen} />} />
          <Route path="/aboutme/grade-documents" element={<PageGradeDocuments />} />
          <Route path="/aboutme/education" element={<PageGradeDocuments />} />
          <Route path="/documents" element={<AboutMe />} />
        </Routes>
        <PopupForm isOpen={isPopupOpen} handlePopupClose={handlePopupClose} onClose={handlePopupClose} />
      </main>
      <MenuColumnRight />
    </div>
  );
}

export default App;
