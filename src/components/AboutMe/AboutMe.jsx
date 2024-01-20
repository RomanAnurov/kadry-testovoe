import React from "react";
import "./AboutMe.scss";
import arrowBackIcon from '../../images/arrowBack.svg'

function AboutMe() {
  return (
    <div className="about">
      <div className="about__nav">
      <button className="about__button" type="button">
        
          <img
            className="about__button-icon"
            src={arrowBackIcon}
            alt="иконка список"
          />
          
          Назад
        </button>
      <h2 className="about__title">
     Редактировать профиль
      </h2>
      </div>
    </div>
  );
}

export default AboutMe;
