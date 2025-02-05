import React from "react";
import "./SearchPage.css";


export default function SearchPage() {
  return (
    <div className="search-page">
      <header className="search-header">
        <button className="back-button">←</button>
        <div className="tabs">
          <button className="tab active">Жилье</button>
          <button className="tab">Впечатления</button>
        </div>
      </header>

      <main className="search-content">
        <h1 className="search-title">Куда?</h1>
        <div className="search-input">
          <input
            type="text"
            placeholder="Поиск направлений"
            className="input-field"
          />
          <button className="search-icon">🔍</button>
        </div>

        <div className="search-options">
          <div className="option">
            <img
              src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg?im_w=320"
              alt="Гибкий поиск"
              className="option-image"
            />
            <p>Гибкий поиск</p>
          </div>
          <div className="option">
            <img
              src="https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320"
              alt="Европа"
              className="option-image"
            />
            <p>Европа</p>
          </div>
          <div className="option">
            <img
              src="https://a0.muscache.com/im/pictures/97d76097-22b3-4d87-9459-ad1b90b18d2f.jpg?im_w=320"
              alt="Турция"
              className="option-image"
            />
            <p>Турция</p>
          </div>
        </div>

        <div className="search-dates">
          <div className="date-picker">
            <p>Когда</p>
            <button className="date-button">Указать даты</button>
          </div>
          <div className="guest-picker">
            <p>Кто</p>
            <button className="guest-button">Добавить гостей</button>
          </div>
        </div>
      </main>

      <footer className="search-footer">
        <button className="clear-button">Очистить все</button>
        <button className="search-button">Искать</button>
      </footer>
    </div>
  );
}
