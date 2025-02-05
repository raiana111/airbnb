import React from "react";
import "./Gallery.css"; // Подключаем стили

const images = [
  "https://a0.muscache.com/im/pictures/93d35f0e-c682-4d4a-8f98-6d8c798f293c.jpg?im_w=1200&im_format=avif", // Замените на реальные ссылки
  "https://a0.muscache.com/im/pictures/miso/Hosting-23494425/original/4f4ff391-e290-4576-82c4-88208c6b3b83.jpeg?im_w=720&im_format=avif",
  "https://a0.muscache.com/im/pictures/89a05a54-7681-4a34-be88-e72f29be8ac7.jpg?im_w=720&im_format=avif",
  "https://a0.muscache.com/im/pictures/af45c5a5-128f-4667-8adc-0a5de279dce4.jpg?im_w=1200&im_format=avif",
  "https://a0.muscache.com/im/pictures/67cdfa11-2927-42e0-ad56-ead9566e2716.jpg?im_w=720&im_format=avif",
  "https://a0.muscache.com/im/pictures/55de9a68-abc9-4a3d-b262-197972b38a04.jpg?im_w=720&im_format=avif",
  "https://a0.muscache.com/im/pictures/b2c6c374-e693-4e7a-b264-26d97c4f2bb2.jpg?im_w=720&im_format=avif",
  "https://a0.muscache.com/im/pictures/miso/Hosting-23494425/original/09978cf7-9522-46af-8b21-4d3316ba3b97.jpeg?im_w=720&im_format=avif",
  "https://a0.muscache.com/im/pictures/daf9b87f-8d8d-4d7c-8407-4513256fe656.jpg?im_w=1200&im_format=avif",
  "https://a0.muscache.com/im/pictures/06cd25a1-1d44-4355-983b-091e7adfbee8.jpg?im_w=720&im_format=avif",
  "https://a0.muscache.com/im/pictures/32770c9a-75d8-46e5-819c-03a3f6601aff.jpg?im_w=1200&im_format=avif",
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image} alt={`Gallery ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
