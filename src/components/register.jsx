import React, { useState } from "react";
import "./registrationForm.css";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Имя: ${name}\nТелефон: ${phone}\nПочта: ${email}`);
  };

  return (
    <div className="registration-window">
      <h2 className="title">Регистрация</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
          required
        />
        <input
          type="tel"
          placeholder="Телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="input"
          required
        />
        <input
          type="email"
          placeholder="Почта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          required
        />
        <div className="buttonContainer">
          <button type="button" className="linkButton">
            У меня есть аккаунт
          </button>
          <button type="submit" className="button">
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
