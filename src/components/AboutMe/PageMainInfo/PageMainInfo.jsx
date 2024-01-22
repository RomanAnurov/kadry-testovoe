import React from 'react';
import './PageMainInfo.scss';
import arrowBackIcon from "../../../images/arrowBack.svg";

function PageMainInfo(props) {
  const{ onPopupOpen  } = props;
  return (
    <div className="main-info">
         <div className="main-info__nav">
        <button className="main-info__button" type="button">
          <img
            className="main-info__button-icon"
            src={arrowBackIcon}
            alt="иконка список"
          />
          Назад
        </button>
        <h2 className="main-info__title" onClick={onPopupOpen}>Редактировать профиль</h2>
      </div>
      <p>
        Я человек с простой мечтой — поделиться своими знаниями в области эмодзи с миром!
      </p>
      <p>
        Нажмите на строчку Редактировать профиль и откроется Popup c формой
      </p>
      
    </div>
  )
}

export default PageMainInfo;