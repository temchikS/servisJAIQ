import React, { useState } from "react";

const SupportForm = () => {
  // Состояния для хранения значений полей ввода
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  // Функция для обработки отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику для отправки данных на сервер или их дальнейшей обработки
    alert(`Имя: ${name}\nПочта: ${email}\nВопрос: ${question}`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.headerText}>Поддержка</h2>
      </div>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <input
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Почта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <textarea
          placeholder="Ваш вопрос"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          style={styles.textarea}
          required
        />
        <button type="submit" style={styles.button}>
          Отправить
        </button>
      </form>
    </div>
  );
};

// Стили для компонентов
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "20px",
    backgroundColor: "#000", // Черный фон для всей страницы
    color: "#fff", // Белый текст
  },
  header: {
    width: "100%",
    padding: "20px",
    marginBottom: "30px", // Увеличено расстояние снизу
    textAlign: "center",
  },
  headerText: {
    margin: 0,
    fontSize: "32px", // Увеличен размер шрифта
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Выравнивание по левому краю
    width: "500px", // Ширина формы соответствует ширине текстового поля
  },
  inputGroup: {
    display: "flex",
    gap: "50px", // Расстояние между полями ввода
    marginBottom: "20px", // Увеличено расстояние снизу
    width: "100%",
  },
  input: {
    width: "calc(50% - 25px)", // Ширина полей ввода с учетом расстояния между ними
    padding: "15px", // Увеличен паддинг
    fontSize: "18px", // Увеличен размер шрифта
    border: "1px solid #aaa", // Серый цвет окантовки
    borderRadius: "5px",
    backgroundColor: "#333", // Темный фон для полей ввода
    color: "#fff", // Белый текст в полях ввода
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.3s",
  },
  textarea: {
    width: "100%", // Ширина текстового поля
    height: "150px", // Высота текстового поля
    padding: "15px", // Увеличен паддинг
    fontSize: "18px", // Увеличен размер шрифта
    border: "1px solid #aaa", // Серый цвет окантовки
    borderRadius: "5px",
    backgroundColor: "#333", // Темный фон для текстовой области
    color: "#fff", // Белый текст в текстовой области
    resize: "none",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.3s",
  },
  button: {
    width: "100%", // Ширина кнопки соответствует ширине формы
    height: "40px", // Высота кнопки
    backgroundColor: "#007BFF", // Синий фон
    color: "#fff", // Белый текст
    padding: "10px",
    fontSize: "18px", // Увеличен размер шрифта
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    boxSizing: "border-box",
    marginTop: "20px", // Расстояние от текстового поля
  },
};

export default SupportForm;
