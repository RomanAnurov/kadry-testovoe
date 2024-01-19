import React from "react";
import './MenuColumnLeft.scss';
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";

function MenuColumnLeft() {
    return (
        <section className="menu-left">
            <Logo />
        <nav className="menu-left__navigation">
            <h3 className="menu-left__title">Профиль</h3>
            <NavLink to="/"  className={({isActive}) =>`menu-left__link ${isActive ? "menu-left__link_active" : ''}`} >Обо мне</NavLink>
            <NavLink to="/documents"  className={({isActive}) =>`menu-left__link ${isActive ? "menu-left__link_active" : ''}`} >Документы</NavLink>
            <h3 className="menu-left__title">Моя работа</h3>
            <NavLink to="/objects"  className={({isActive}) =>`menu-left__link ${isActive ? "menu-left__link_active" : ''}`} >Объекты</NavLink>
            <NavLink to="/calendar"  className={({isActive}) =>`menu-left__link ${isActive ? "menu-left__link_active" : ''}`} >Календарь</NavLink>
            <NavLink to="/responses"  className={({isActive}) =>`menu-left__link ${isActive ? "menu-left__link_active" : ''}`} >Отклики</NavLink>

        </nav>

        </section>
    )

}
export default MenuColumnLeft;