import React from "react";
import "./PopupForm.scss";

function PopupForm(props) {
  const { isOpen, onClose } = props;

  return (
    <section className={`popup  ${isOpen ? "popup_type_opened" : ""}`}>
      <div
        className="popup__container"
        onMouseDown={(evt) => evt.stopPropagation()}
      >
        <h2 className="popup__title">Основная информация</h2>
        <form className="form">
          <fieldset className="form__avatar-upload"></fieldset>
          <fieldset className="form__user-names">
            <fieldset className="form__user-name form__user-name_type_one">
              <label className="form__label" htmlFor="last-name">Фамилия</label>
              <input className="form__input form__input_type_family" type="text" id="last-name" />
            </fieldset>

            <fieldset className="form__user-name">
              <label className="form__label" htmlFor="first-name">Имя</label>
              <input className="form__input form__input_type_name" type="text" id="first-name" />
            </fieldset>
          </fieldset>

          <fieldset className="form__column-inputs">
            <label className="form__label" htmlFor="status" >Статус</label>
            <select className="form__input form__input_type_status" id="status">
              <option value=""></option>
              <option value="Пенсионер">Пенсионер</option>
              <option value="Студент">Студент</option>
              <option value="Фрилансер">Фрилансер</option>
            </select>

            <label className="form__label" htmlFor="date" >Дата рождения</label>
            <input className="form__input form__input_type_date" type="date" id="date"></input>

            <label className="form__label" htmlFor="grazhdanstvo" >Гражданство</label>
            <select className="form__input form__input_type_status" id="grazhdanstvo">
              <option value=""></option>
              <option value="РФ">РФ</option>
              <option value="СССР">СССР</option>
              <option value="Я человек мира">Я человек мира</option>
            </select>

            <label className="form__label" htmlFor="pereezd" >Готовность приехать</label>
            <select className="form__input form__input_type_status" id="pereezd">
              <option value=""></option>
              <option value="Да">Да</option>
              <option value="Нет">Нет</option>
            </select>

            <label className="form__label" htmlFor="specialnost" >Основная специальность</label>
            <select className="form__input form__input_type_status" id="specialnost">
              <option value="Бетонщик">Бетонщик</option>
              <option value="Каменьщик">Каменьщик</option>
              <option value="Токарь">Токарь</option>
            </select>

            <label htmlFor="check" className="form__label">
              <input type="checkbox" id="check" className="form__checkbox-hidden" />
              <span className="form__checkbox-visible"></span>
              <span className="form__checkbox-text">Стропальщик</span>
            </label>
          </fieldset>

          <fieldset className="form__usloviay-grid">
            <fieldset className="form__user-name">
              <label className="form__label" htmlFor="zarplata">Желаемая заработная плата</label>
              <input className="form__input" type="text" id="zarplata" />
            </fieldset>

            <fieldset className="form__user-name">
              <label className="form__label" htmlFor="hours">Желаемая часовая ставка</label>
              <input className="form__input form__input_type_hours" type="text" id="hours" />
            </fieldset>

            <fieldset className="form__user-name">
              <label className="form__label" htmlFor="grafic">График работы</label>
              <select className="form__input"  id="grafic">
              <option value=""></option>
              <option value="График 1">График 1</option>
              <option value="График 2">График 2</option>
              <option value="График 3">График 3</option>
            </select>
            </fieldset>

            <fieldset className="form__user-name">
              <label className="form__label" htmlFor="vyrabotka">Желаемая выработка часов</label>
              <input className="form__input" type="text" id="vyrabotka" />
            </fieldset>
          </fieldset>
          <label className="form__label" htmlFor="area">О себе</label>
          
<textarea className="form__area" id="area" rows="5" maxLength='500'></textarea>




        </form>
      </div>
    </section>

  );
}

export default PopupForm;
