import React, { useState } from "react";
import "./App.css";

// Основной компонент приложения
function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="App">
      <button onClick={openModal} className="openModalButton">
        Открыть заявку
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="closeButton" onClick={closeModal}>
              &times;
            </button>
            <h2 className="modal-title">Заявка</h2>
            <form className="modal-form">
              <div>
                <label>Имя:</label>
                <input type="text" placeholder="Введите имя" />
              </div>
              <div>
                <label>Email:</label>
                <input type="email" placeholder="Введите email" />
              </div>
              <div>
                <label>Адрес:</label>
                <input type="text" placeholder="Введите адрес" />
              </div>
              <div>
                <label>Описание проблемы:</label>
                <textarea placeholder="Опишите вашу проблему"></textarea>
              </div>
              <button type="submit" className="submitButton">Отправить</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
