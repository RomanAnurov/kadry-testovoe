import React, { useState } from "react";
import "./PopupForm.scss";
import profileIcon from '../../images/profile.svg';

function PopupForm(props) {
  const { isOpen, onClose, handlePopupClose } = props;

  const [image, setImage] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [drag, setDrag] = useState(false);

  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setImageUrl(fileReader.result);
  }
  const handleSubmit = (evt) => {
    console.log(evt.target)
    handlePopupClose();
  }
  const handleOnChange = (evt) => {
    evt.preventDefault();

    if (evt.target.files && evt.target.files.length) {
      //console.log(evt.target.files[0])
      const file = evt.target.files[0];
      setImage(file);
      fileReader.readAsDataURL(file);

    }
  }

  const handleDrop = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    if (evt.dataTransfer.files && evt.dataTransfer.files.length) {
      setImage(evt.dataTransfer.files[0]);
      fileReader.readAsDataURL(evt.dataTransfer.files[0])
    }
    setDrag(false);

  }

  const handleDragEmpty = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    setDrag(true)
  };
  const handleDragLeave = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    setDrag(false)
  };



  return (
    <section className={`popup  ${isOpen ? "popup_type_opened" : ""}`}>
      <div
        className="popup__container"
        onMouseDown={(evt) => evt.stopPropagation()}
      >
        <h2 className="popup__title">Основная информация</h2>
        <form className="form" name="form" onSubmit={handleSubmit} noValidate>
          <fieldset className="form__avatar-upload">
            <img className="form__avatar" src={imageUrl ? imageUrl : profileIcon} alt="аватар" />
            <div className={`form__upload-block ${drag ? "form__upload-block_active" : ''}`}
              onDrag={handleDragEmpty}
              onDrop={handleDrop}
              onDragOver={handleDragEmpty}
              onDragLeave={handleDragLeave}>

              <span className="form__upload-span">Перетащите или выберите фото на компьютере</span>
              <div className="form__upload-button">
                <label className="form__label form__label_type_avatar" htmlFor="avatar">
                  <input className="form__input form__input_type_avatar"
                    type="file"
                    id="avatar"
                    onChange={handleOnChange} />
                </label>
                <span className="form__avatar-span">Выбрать файл</span>
              </div>
            </div>

          </fieldset>
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
              <select className="form__input" id="grafic">
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
          <span className="form__area-span">0/500</span>

          <fieldset className="form__fieldset-buttons">
            <button className="form__button" type="button" onClick={onClose}>Отмена</button>
            <button className="form__button form__button_type_save" type="submit" >Сохранить</button>

          </fieldset>
        </form>
      </div>
    </section>

  );
}

export default PopupForm;
