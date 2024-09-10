import React, { useState } from "react";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Имя: ${name}\nТелефон: ${phone}\nПочта: ${email}`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Регистрация</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="tel"
          placeholder="Телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
        <div style={styles.buttonContainer}>
          <button type="button" style={styles.linkButton}>
            У меня есть аккаунт
          </button>
          <button type="submit" style={styles.button}>
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    border: "2px solid rgba(128, 128, 128, 0.5)",
    borderRadius: "10px",
    padding: "20px",
    width: "350px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "100%",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "10px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "48%",
  },
  linkButton: {
    backgroundColor: "transparent",
    color: "#007BFF",
    padding: "10px",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
    width: "48%",
    textAlign: "left",
  },
};

export default RegistrationForm;
