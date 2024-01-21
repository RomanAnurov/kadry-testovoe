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
            <fieldset className="form__user-name">
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
            <select className="form__input form__input_type_status"  id="status">
              <option value=""></option>
              <option value="Пенсионер">Пенсионер</option>
              <option value="Студент">Студент</option>
              <option value="Фрилансер">Фрилансер</option>
            </select>
            <label className="form__label" htmlFor="date" >Дата рождения</label>
            <input className="form__input form__input_type_date" type="date" id="date"></input>

            <label className="form__label" htmlFor="grazhdanstvo" >Гражданство</label>
            <select className="form__input form__input_type_status"  id="grazhdanstvo">
              <option value=""></option>
              <option value="РФ">РФ</option>
              <option value="СССР">СССР</option>
              <option value="Я человек мира">Я человек мира</option>
            </select>

            <label className="form__label" htmlFor="pereezd" >Готовность приехать</label>
            <select className="form__input form__input_type_status"  id="pereezd">
              <option value=""></option>
              <option value="Да">Да</option>
              <option value="Нет">Нет</option>
            </select>

            <label className="form__label" htmlFor="specialnost" >Готовность приехать</label>
            <select className="form__input form__input_type_status"  id="specialnost">
              <option value="Бетонщик">Бетонщик</option>
              <option value="Каменьщик">Каменьщик</option>
              <option value="Токарь">Токарь</option>
            </select>
            
          </fieldset>


        </form>
      </div>
    </section>

  );
}

export default PopupForm;
