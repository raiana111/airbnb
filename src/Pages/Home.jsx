import React, { useState } from "react";
import Header from "../components/Header";
import CardGrid from "../components/CardGrid";
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal.jsx";
import SearchPage from "./SearchPage.jsx";


const Home = () => {
  
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  
  const handleLoginOpen = () => {
    setIsLoginVisible(true);
  };


  const handleLoginClose = () => {
    setIsLoginVisible(false);
  };
  

  return (
    <div>
      <Header onLoginClick={handleLoginOpen} />
      <CardGrid />
      <Footer />

      {isLoginVisible && <LoginModal onClose={handleLoginClose} />}
    </div>
  );
};

export default Home;
