import { useState } from "react";
import "./MainPage.css";
import DetailPage from "./components/DetailPage/DetailPage.jsx";

function MainPage() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    { id: 1, name: "One-piece", img: "/img/onepiece.jpg", desc: "Stylish one-piece AI service" },
    { id: 2, name: "Shirts", img: "/img/shirt.jpg", desc: "Personalized shirt design" },
    { id: 3, name: "Jeans", img: "/img/jeans.jpg", desc: "Fit-optimized denim styling" },
  ];

  return (
    <div className="main-container">
      <header className="hero">
        <h1>Specialized, efficient, and thorough fashion AI services.</h1>
        <p>Quality fashion AI at a fair price.</p>
        <div className="hero-btns">
          <button className="red">Get Started</button>
          <button className="white">View Services</button>
        </div>
      </header>

      <section className="service-section">
        <h2>Our Top-Tier Service Is Widely Used</h2>
        <div className="card-list">
          {items.map((item) => (
            <div key={item.id} className="card" onClick={() => setSelectedItem(item)}>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <button>View Detail</button>
            </div>
          ))}
        </div>
      </section>

      {selectedItem && (
        <DetailPage item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
}

export default MainPage;
