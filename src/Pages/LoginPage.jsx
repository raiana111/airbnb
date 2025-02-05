import React, { useState } from "react";
import "./App.css"; 


function App() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleLoginClick = () => {
    setIsLoginVisible(true);
  };

  const closeLogin = () => {
    setIsLoginVisible(false);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Airent</h1>
        <button className="login-button" onClick={handleLoginClick}>
          Войти
        </button>
      </header>

      <main className="content">
        {!isLoginVisible && <p>Список объектов для аренды...</p>}

        
        {isLoginVisible && (
          <div className="login-modal">
            <div className="login-form">
              <h2>Добро пожаловать в Airent</h2>
              <input
                type="email"
                placeholder="e-mail"
                className="login-input"
              />
              <button className="submit-button">Next</button>
              <div className="social-buttons">
                <button>Continue with Facebook</button>
                <button>Continue with Google</button>
                <button>Continue with Apple</button>
              </div>
              <button className="close-button" onClick={closeLogin}>
                Закрыть
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
