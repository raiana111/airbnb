import React from "react";
import "./CardGrid.css";
import { useNavigate } from "react-router-dom";
export const images = ["https://a0.muscache.com/im/ml/photo_enhancement/pictures/93d35f0e-c682-4d4a-8f98-6d8c798f293c.jpg?im_w=960&im_format=avif",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1152801654436918165/original/cfca7597-a7a9-48bb-8ddf-876654ca9e87.jpeg?im_w=960&im_format=avif",
  "https://a0.muscache.com/im/pictures/miso/Hosting-614089057784617504/original/0e66de7c-e7bf-44b5-9c87-aaa5c558e9e5.jpeg?im_w=720&im_format=avif",
  "https://a0.muscache.com/im/pictures/miso/Hosting-51764920/original/433c7fbe-fe9c-4f4e-a3d0-7ac6ee1fbdb1.jpeg?im_w=720&im_format=avif",
  "https://a0.muscache.com/im/pictures/87d184f3-7af9-4e5f-83de-267c8289f6a3.jpg?im_w=720&im_format=avif",
  "https://a0.muscache.com/im/pictures/2a37f099-31b7-4824-b0a4-d9aabb660d0e.jpg?im_w=720&im_format=avif",
  "https://a0.muscache.com/im/pictures/5f3cd0bb-4c3a-4b05-9502-343165250e88.jpg?im_w=720&im_format=avif",
  "https://a0.muscache.com/im/pictures/miso/Hosting-891815896198313942/original/54656f8c-afdc-4b85-8c3c-f99c6bb9ed6e.jpeg?im_w=720&im_format=avif",
  "https://a0.muscache.com/im/pictures/aaf54d62-d731-47db-bd26-74126901d87a.jpg?im_w=720&im_format=avif",
  "https://a0.muscache.com/im/pictures/miso/Hosting-801874632839803411/original/6bcd3c49-4c6e-43df-985a-57a77bbb4027.jpeg?im_w=720&im_format=avif",
  "https://a0.muscache.com/im/pictures/5f3cd0bb-4c3a-4b05-9502-343165250e88.jpg?im_w=720&im_format=avif",
  "https://a0.muscache.com/im/pictures/miso/Hosting-1202092990184308906/original/f9acd6c0-c05d-46ed-929f-b9f1b106e15e.jpeg?im_w=720&im_format=avif",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1170768322665578556/original/28470bf1-30d2-4562-85d0-9296303cdccd.jpeg?im_w=720&im_format=avif",
  "https://a0.muscache.com/im/pictures/miso/Hosting-672754842468215829/original/ae3a4c55-67aa-4d1f-8853-8fc11e3ba006.jpeg?im_w=720&im_format=avif",
  "https://a0.muscache.com/im/pictures/miso/Hosting-905575005659682740/original/dcf4573d-f06b-4cbf-8c70-e2ae38b80a94.jpeg?im_w=720&im_format=avif"
]
export const cards = [
  {
    title: "Ulaanbaatar",
    description: "The capital city of Mongolia.",
    price: "$100/night",
    distance: "2,563 km from Bishkek",
  },
  {
    title: "Erdenet",
    description: "A major industrial center in Mongolia.",
    price: "$80/night",
    distance: "2,400 km from Bishkek",
  },
  {
    title: "Darkhan",
    description: "Known as the 'City of Metal' in Mongolia.",
    price: "$75/night",
    distance: "2,450 km from Bishkek",
  },
  {
    title: "Khovd",
    description: "A city with a rich cultural heritage.",
    price: "$70/night",
    distance: "1,800 km from Bishkek",
  },
  {
    title: "Ölgii",
    description: "The capital of Bayan-Ölgii Province.",
    price: "$65/night",
    distance: "1,600 km from Bishkek",
  },
  {
    title: "Choibalsan",
    description: "An important industrial city in eastern Mongolia.",
    price: "$90/night",
    distance: "3,000 km from Bishkek",
  },
  {
    title: "Mörön",
    description: "The administrative center of Khövsgöl Province.",
    price: "$85/night",
    distance: "2,700 km from Bishkek",
  },
  {
    title: "Sainshand",
    description: "A city located in the eastern part of Mongolia.",
    price: "$95/night",
    distance: "2,800 km from Bishkek",
  },
  {
    title: "Baruun-Urt",
    description: "The capital of Sükhbaatar Province.",
    price: "$88/night",
    distance: "2,900 km from Bishkek",
  },
  {
    title: "Arvaikheer",
    description: "A city in central Mongolia.",
    price: "$77/night",
    distance: "2,200 km from Bishkek",
  },
  {
    title: "Dalanzadgad",
    description: "The capital of Ömnögovi Province.",
    price: "$82/night",
    distance: "2,600 km from Bishkek",
  },
  {
    title: "Zuunmod",
    description: "The administrative center of Töv Province.",
    price: "$79/night",
    distance: "2,550 km from Bishkek",
  },
];



const CardGrid = () => {
  const navigate = useNavigate()
  return (
    <div>
    <main className="card-grid">
      {cards.map((card, index) => (
        <div className="card" key={index} onClick={()=>navigate('/random/'+index, {state:{index}})}>
          <img src={images[index]} alt="Yurt" />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <span>{card.price}</span>
        </div>
      ))}
    </main>
    <button className="show-more">Показать больше</button>
  </div>
  );
};

export default CardGrid;


