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
    marginBottom: "20px",
    textAlign: "center",
  },
  headerText: {
    margin: 0,
    fontSize: "24px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "100%",
    maxWidth: "500px",
  },
  inputGroup: {
    display: "flex",
    gap: "15px",
    marginBottom: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #aaa", // Серый цвет окантовки
    borderRadius: "5px",
    backgroundColor: "#333", // Темный фон для полей ввода
    color: "#fff", // Белый текст в полях ввода
    outline: "none",
    transition: "border-color 0.3s",
  },
  input: {
    '&:focus': {
      borderColor: "#007BFF", // Подсветка при фокусировке
    },
  },
  textarea: {
    width: "100%",
    height: "150px",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #aaa", // Серый цвет окантовки
    borderRadius: "5px",
    backgroundColor: "#333", // Темный фон для текстовой области
    color: "#fff", // Белый текст в текстовой области
    resize: "none",
    outline: "none",
    transition: "border-color 0.3s",
  },
  textarea: {
    '&:focus': {
      borderColor: "#007BFF", // Подсветка при фокусировке
    },
  },
  button: {
    backgroundColor: "#007BFF", // Синий фон
    color: "#fff", // Белый текст
    padding: "10px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default SupportForm;
