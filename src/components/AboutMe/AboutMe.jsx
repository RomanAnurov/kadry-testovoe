import React from "react";
import "./AboutMe.scss";
import { Outlet } from "react-router-dom";


function AboutMe() {
  
  return (
    <div className="about">
      <h2 className='about__title'>Заголовок страницы</h2>
      <p className='about__text'>На этой сранице будет общая информация о пользователе</p>
      <p className='about__text'>На этой сранице будет общая информация о пользователе</p>
      <p className='about__text'>На этой сранице будет общая информация о пользователе</p>
      <p className='about__text'>На этой сранице будет общая информация о пользователе</p>
      <p className='about__text'>На этой сранице будет общая информация о пользователе</p>
      <p className='about__text'>На этой сранице будет общая информация о пользователе</p>
      <>
        <Outlet  />
      </>
    </div>

  );
}

export default AboutMe;
