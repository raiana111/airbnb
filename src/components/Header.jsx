// import React from "react";
// import "./Header.css";
// import { CgProfile } from "react-icons/cg";
// const Header = () => {
//   return (
//     <div class="container--0-">
//   <div class="container-0-1-0">
//     <div class="container-1-2-0">
//       <div class="container-2-3-0"><div class="text-3-4-0">Airrent</div></div>
//     </div>
//   </div>
//   <svg
//     width="509"
//     height="46"
//     viewBox="0 0 509 46"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <rect x="0.667969" width="508" height="46" rx="23" fill="#D9D9D9"></rect>
//   </svg>
//   <div class="text-0-1-2">Язык</div>
//   <div class="container-0-1-3">
//     <svg 
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg">

//     </svg>
//     <div class="text-1-2-1">Войти</div>
//   </div>
// </div>

// // const Header = () => {
// //   return (
// //     <header className="header">
// //       <div className="menu">
// //       <h1>Airrent</h1>
// //       </div>
// //       <h1>Airrent</h1>
// //       <div className="menu"> 
// //         <span>Языки</span>
// //         <span><CgProfile />
// //         Войти</span>
// //       </div>
// //     </header>
// //   );
// // };
// )
// }
// export default Header;

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
  width: "100%", // Занимает всю ширину страницы
  padding: "20px",
  backgroundColor: "#007bff",
  color: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: 0, // Убирает внешние отступы
  boxSizing: "border-box", // Учитывает padding в ширине
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


