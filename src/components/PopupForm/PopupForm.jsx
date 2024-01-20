import React from "react";
import "./PopupForm.scss";

function PopupForm(props) {
  const { isOpen, onClose } = props;

  return (
    <section className={`popup  ${isOpen ? "popup_type_opened" : ""}`}>
      <div
        className="popup__container"
        onMouseDown={(evt) => evt.stopPropagation()}
      ></div>
       <button
          className="popup__close"
          onClick={onClose}
          type="button"
        ></button>
    </section>
  );
}

export default PopupForm;
