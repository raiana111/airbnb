import React, { useState } from "react";
import Header from "../components/Header";
import CardGrid from "../components/CardGrid";
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal.jsx";
import SearchPage from "./SearchPage.jsx";


const Home = () => {
  // Состояние для отображения/скрытия модального окна
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  // Открыть модальное окно
  const handleLoginOpen = () => {
    setIsLoginVisible(true);
  };

  // Закрыть модальное окно
  const handleLoginClose = () => {
    setIsLoginVisible(false);
  };
  

  return (
    <div>
      {/* Передаем функцию handleLoginOpen в Header */}
      <Header onLoginClick={handleLoginOpen} />
      <CardGrid />
      <Footer />

      {/* Модальное окно отображается, если isLoginVisible === true */}
      {isLoginVisible && <LoginModal onClose={handleLoginClose} />}
    </div>
  );
};

export default Home;
