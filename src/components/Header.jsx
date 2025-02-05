import React from "react";
import "./Header.css";
import { CgProfile } from "react-icons/cg";

const Header = ({ onLoginClick }) => {
  return (
    <header style={headerStyle}>
      <h1 style={{ margin: 0 }}>Airrent</h1>
      <button onClick={onLoginClick} style={loginButtonStyle}>
        Войти
      </button>
    </header>
  );
};

const headerStyle = {
  width: "100%", 
  padding: "20px",
  backgroundColor: "#007bff",
  color: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: 0, 
  boxSizing: "border-box", 
};

const loginButtonStyle = {
  backgroundColor: "white",
  color: "#007bff",
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
};

export default Header;


