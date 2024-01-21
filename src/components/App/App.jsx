import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
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

  return (
    <div className="page__content">
      <Header />
      <MenuColumnLeft />
      <main className="main">
        <Routes>
          <Route  path="/" element={''}/>
          <Route  path="/aboutme" element={<AboutMe  />}/>
            <Route  path="/aboutme/main-info" element={<PageMainInfo isOpen={isPopupOpen} onPopupOpen={handlePopupOpen} />} />
            <Route  path="/aboutme/grade-documents" element={<PageGradeDocuments />} />
            <Route  path="/aboutme/education" element={<PageMainInfo />} />
            <Route path="/documents" element={<AboutMe />} />
        </Routes>
        <PopupForm isOpen={isPopupOpen} onClose={handlePopupClose} />
      </main>
      <MenuColumnRight />

      <div className="rrr"></div>

      
    </div>
  );
}

export default App;
