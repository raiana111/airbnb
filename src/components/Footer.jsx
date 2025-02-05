import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="column">
          <h4>Центр помощи</h4>
          <p>Центр помощи</p>
          <p>AirCover</p>
          <p>Борьба с дискриминацией</p>
          <p>Помощь людям с инвалидностью</p>
        </div>
        <div className="column">
          <h4>Прием гостей</h4>
          <p>Сдайте жилье на Airrent</p> 
          <p>AirCover для хозяев</p>
          <p>Материалы для хозяев</p>
          <p>Форум сообщества</p>
        </div>
        <div className="column">
          <h4>Airrent</h4>
          <p>Новые функции</p>
          <p>Карьера в Airbnb</p>
          <p>Для инвесторов</p>
          <p>Прием гостей на Airbnb.org</p>
        </div>
        <div className="column">
          <h4>Join Us</h4>
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Airrent © 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
