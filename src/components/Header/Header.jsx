import React from "react";
import "./Header.scss";
//import Button from "../Button/Button";
import vakanciyIcon from "../../images/vakanciy.svg";
import objectIcon from "../../images/objects.svg";
import favoriteIcon from '../../images/favorite.svg';
import bellIcon from '../../images/bell.svg';
import profileIcon  from '../../images/profile.svg';

function Header() {
  return (
    <header className="header">
      <nav className="header__menu">
        <button className="button" type="button">
          <img
            className="button__icon"
            src={vakanciyIcon}
            alt="иконка список"
          />
          Вакансии
        </button>
        <button className="button" type="button">
          <img className="button__icon" src={objectIcon} alt="иконка здание" />
          Объекты
        </button>
      </nav>

      <nav className="header__menu-user">        <button className="button button_type_user" type="button">
          <img
            className="button__icon button__icon_type_user"
            src={favoriteIcon}
            alt="иконка список"
          />
          Избранное
        </button>
        <button className="button button_type_user" type="button">
          <img
            className="button__icon button__icon_type_user"
            src={bellIcon}
            alt="иконка здание"
          />
          Уведомления
        </button>
        <button className="button button_type_user" type="button">
          <img
            className="button__icon button__icon_type_user"
            src={profileIcon}
            alt="иконка здание"
          />
          Профиль
        </button>
      </nav>
    </header>
  );
}

export default Header;
//className={`${styles.header__search} ${styles.header__icon}`}></button>
