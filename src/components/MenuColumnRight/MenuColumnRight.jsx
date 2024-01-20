import React from "react";
import './MenuColumnRight.scss';
import { NavLink } from "react-router-dom";

function MenuColumnRight() {
    return (
        <section className="menu-right">
          <div className="menu-right__container">
           <nav className="menu-right__navigation">
            <NavLink to="/main-info"  className={({isActive}) =>`menu-right__link ${isActive ? "menu-right__link_active" : ''}`} >Основная информация</NavLink>
            <NavLink to="/grade-documents"  className={({isActive}) =>`menu-right__link ${isActive ? "menu-right__link_active" : ''}`} >Квалификационные документы</NavLink>
            <NavLink to="/education"  className={({isActive}) =>`menu-right__link ${isActive ? "menu-right__link_active" : ''}`} >Образование</NavLink>
            <NavLink to="/data-calculations"  className={({isActive}) =>`menu-right__link ${isActive ? "menu-right__link_active" : ''}`} >Данные для расчётов</NavLink>
            <NavLink to="/type-work"  className={({isActive}) =>`menu-right__link ${isActive ? "menu-right__link_active" : ''}`} >Виды работ</NavLink>
            <NavLink to="/additional-data"  className={({isActive}) =>`menu-right__link ${isActive ? "menu-right__link_active" : ''}`} >Дополнительные данные</NavLink>
         </nav>
         </div>
      </section>
    )

}
export default MenuColumnRight;
