import React from "react";

const LoginModal = ({ onClose }) => {
  return (
    <div style={modalOverlayStyle}>
      <div style={modalStyle}>
        <h2>Добро пожаловать в Airrent</h2>
        <input
          type="email"
          placeholder="e-mail"
          style={inputStyle}
        />
        <button style={submitButtonStyle}>Next</button>
        <div style={socialButtonsStyle}>
          <button style={socialButtonStyle}>Continue with Facebook</button>
          <button style={socialButtonStyle}>Continue with Google</button>
          <button style={socialButtonStyle}>Continue with Apple</button>
        </div>
        <button style={closeButtonStyle} onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>
  );
};

const modalOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalStyle = {
  background: "white",
  padding: "30px",
  borderRadius: "10px",
  width: "90%",
  maxWidth: "400px",
  textAlign: "center",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const submitButtonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const socialButtonsStyle = {
  marginTop: "20px",
};

const socialButtonStyle = {
  width: "100%",
  padding: "10px",
  margin: "5px 0",
  border: "1px solid #ccc",
  borderRadius: "5px",
  cursor: "pointer",
};

const closeButtonStyle = {
  marginTop: "20px",
  padding: "10px 20px",
  background: "#ff4d4d",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default LoginModal;
