import React from "react";

import arrowBackIcon from "../../../images/arrowBack.svg";

function PageGradeDocuments() {
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
        <h2 className="main-info__title">Редактировать профиль</h2>
      </div>
      <p>У меня куча разных документов!</p>
      <p>Есть паспорт</p>
      <p>Есть права</p>
    </div>
  );
}

export default PageGradeDocuments;
