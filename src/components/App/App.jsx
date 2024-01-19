import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import MenuColumnLeft from "../MenuColumnLeft/MenuColumnLeft";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import MenuColumnRight from "../MenuColumnRight/MenuColumnRight";

function App() {
  return (
    <div className="page__content">
      <MenuColumnLeft />
       <Header />
       <main className="main">
       <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/documents" element={<AboutMe />} />
      </Routes>
      </main>
      <MenuColumnRight />



      
      
    </div>
  );
}

export default App;
