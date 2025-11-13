import { useState, useEffect } from "react";
import "./ProductSection.css";
import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

// 개별 슬라이드 컴포넌트
function ProductSlider({ products, onSelectItem }) {
  const itemsPerView = 3; // 한 번에 보여줄 아이템 수
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index + itemsPerView < products.length) setIndex(index + itemsPerView);
  };

  const handlePrev = () => {
    if (index - itemsPerView >= 0) setIndex(index - itemsPerView);
  };

  return (
    <div className="slider-block">
      <div className="slider-container">
        {index > 0 && (
          <button className="slide-btn left" onClick={handlePrev}>
            <ChevronLeft size={24} />←
          </button>
        )}

        <div className="slider-wrapper">
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${(index / itemsPerView) * 100}%)`,
            }}
          >
            {products.map((item) => (
              <div className="slide-item" key={item.id}>
                <ProductCard item={item} onSelectItem={onSelectItem} />
              </div>
            ))}
          </div>
        </div>

        {index + itemsPerView < products.length && (
          <button className="slide-btn right" onClick={handleNext}>
            <ChevronRight size={24} />→
          </button>
        )}
      </div>
    </div>
  );
}

// 전체 상품 섹션
function ProductSection({ onSelectItem }) {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      // ❗ GitHub Pages 호환 fetch 경로
      const url = `${import.meta.env.BASE_URL}data/products.json`;
      const res = await fetch(url);
      const data = await res.json();

      // 10개씩 그룹화
      const chunked = [];
      for (let i = 0; i < data.length; i += 10) {
        chunked.push(data.slice(i, i + 10));
      }
      setGroups(chunked);
    }
    fetchProducts();
  }, []);

  return (
    <section className="product-section">
      <div className="product-inner">
        <div className="section-header">
          <div>
            <h2 className="section-title">
              Our Top-Tier Service Is<br /> Widely Used
            </h2>
          </div>

          <div className="section-service">
            <h3>Services</h3>
            <p>
              While we can customize your fashion AI plan to suit your
              <br />
              needs, most clients schedule regular fashion AI
              <br />
              services:
            </p>
          </div>
        </div>

        <div className="divider-line"></div>

        {/* 두 줄 슬라이드 */}
        {groups.map((group, i) => (
          <ProductSlider
            key={i}
            products={group}
            onSelectItem={onSelectItem}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
