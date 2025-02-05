import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { images } from "../components/CardGrid"; // Убедитесь, что images импортирован корректно
import Header from "../components/Header"; // Импортируем Header
import Footer from "../components/Footer"; // Импортируем Footer
import "./Gallery.css";

export default function Gallery() {
  const { state } = useLocation(); // Получаем переданный state
  const navigate = useNavigate(); // Инициализируем navigate

  const index = state?.index || 0; // Проверяем наличие state и index, устанавливаем значение по умолчанию 0

  // Проверка на наличие массива images
  const mainImage = images?.[index] || images?.[0]; // Если изображения по индексу нет, показываем первое изображение

  if (!images || images.length === 0) {
    return <p>Изображения недоступны.</p>;
  }

  // Массив отзывов с фотографиями
  const reviews = [
    {
      name: "航大",
      date: "8 месяцев на Airbnb",
      review: "ここで過ごした時間はとても忘れられない経験になりました。楽しい雰囲気の中で会うすばらしい地元の人々の生活を体験することができます。ここで味わう経験は、他のどこにもない特別なものです。",
      photo: "https://a0.muscache.com/im/pictures/user/eb02d701-7618-461c-8442-714ec3918653.jpg?im_w=240&im_format=avif",
    },
    {
      name: "Aaron",
      date: "8 месяцев на Airbnb",
      review:
        "Me and my friend had the most wonderful time with Ochir and Tsegi. They were so welcoming and fantastic hosts. We felt very lucky to meet such lovely people and experience their way of life. We helped out with work on the farm, went for walks in the beautiful surroundings, and had delicious meals every day!",
      photo: "https://a0.muscache.com/im/pictures/user/User-524468573/original/52872061-887b-4cfc-b956-a3f8efc267a5.jpeg?im_w=240&im_format=avif",
    },
    {
      name: "성경",
      date: "8 месяцев на Airbnb",
      review: "완벽합니다. 진짜 몽골 유목민의 삶을 경험하고 싶다면 강력하게 추천합니다.",
      photo: "https://a0.muscache.com/im/pictures/user/ef579c5b-fbbf-4747-8757-7bab8f4b2483.jpg?im_w=240&im_format=avif",
    },
    {
      name: "Lukas",
      date: "8 месяцев на Airbnb",
      review: "진짜 몽골을 즐기고 싶다면, 다이슨 설명이 필요 없는 곳, 항상 그립습니다.",
      photo: "https://a0.muscache.com/im/pictures/user/User/original/2114cbe7-d9bd-4cd7-a7d4-2bd38236333a.jpeg?im_w=240&im_format=avif",
    },
    {
      name: "Kate",
      date: "8 месяцев на Airbnb",
      review:
        "Tsegi and Ochir were very friendly hosts and made me feel right at home, in spite of not speaking English. The food was delicious and plentiful; I had no need of the snacks I'd brought with me. The bed was comfortable (although there was no...",
      photo: "https://a0.muscache.com/im/pictures/user/5b877d75-c0a3-4db4-a679-d4a5f1c108d1.jpg?im_w=240&im_format=avif",
    },
    {
      name: "Shane",
      date: "8 месяцев на Airbnb",
      review:
        "Such an amazing family. Out of all the days I was in Mongolia, my most enjoyable time was spent here. Helping out with daily chores and preparing livestock fodder for the winter w...",
      photo: "https://a0.muscache.com/im/pictures/user/88ad3285-38d6-4d1b-baab-67f133b9994d.jpg?im_w=240&im_format=avif",
    },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main style={{ marginTop: "20px" }}>
        {/* Title */}
        <h2 style={{ fontSize: "22px", color: "#333" }}>Комната, Khujirt, Монголия</h2>

        {/* Image Gallery */}
        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          <img src={mainImage} alt="Main" style={{ width: "60%", borderRadius: "8px" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "40%" }}>
            {images.slice(0, 4).map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt={`Thumbnail ${idx + 1}`}
                style={{ width: "100%", borderRadius: "8px" }}
              />
            ))}
          </div>
        </div>

        {/* Host Information */}
        <div
          style={{
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            marginTop: "20px",
          }}
        >
          <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Хозяин: Bayarmaa</h3>
          <p style={{ fontSize: "14px", color: "#555" }}>77 отзывов от гостей</p>
        </div>

        {/* Booking Section */}
        <aside
          style={{
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}>5,236₽ / ночь</p>
            <strike style={{ fontSize: "14px", color: "#999" }}>7,113₽</strike>
          </div>
          <div style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
            <p>Итого за 5 ночей: 33,686₽</p>
            <p>Скидка за долгосрочное бронирование: -3,589₽</p>
            <p>Сервисный сбор Airbnb: 4,234₽</p>
            <p>
              <strong>Всего (без учета налогов): 30,475₽</strong>
            </p>
          </div>
          <button onClick={() => navigate("/search_page")}
            style={{
              marginTop: "20px",
              padding: "10px",
              backgroundColor: "#cc0052",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Забронировать
          </button>
        </aside>

        {/* Guest Reviews */}
        <section style={{ marginTop: "20px" }}>
          <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Отзывы гостей</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {reviews.map((review, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  gap: "15px",
                  alignItems: "flex-start",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "15px",
                }}
              >
                <img
                  src={review.photo}
                  alt={`Photo of ${review.name}`}
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                />
                <div>
                  <h4 style={{ fontSize: "16px", marginBottom: "5px" }}>{review.name}</h4>
                  <p style={{ fontSize: "12px", color: "#777", marginBottom: "10px" }}>{review.date}</p>
                  <p style={{ fontSize: "14px", color: "#555" }}>{review.review}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
