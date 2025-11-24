import { useState, useEffect } from "react";
import "./ProductSection.css";
import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { supabase } from "../../../../api/supabase.js";

function ProductSlider({ products, onSelectItem }) {
  const itemsPerView = 3;
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index + itemsPerView < products.length)
      setIndex(index + itemsPerView);
  };

  const handlePrev = () => {
    if (index - itemsPerView >= 0)
      setIndex(index - itemsPerView);
  };

  return (
    <div className="slider-block">
      <div className="slider-container">

        {index > 0 && (
          <button className="slide-btn left" onClick={handlePrev}>
            <ChevronLeft size={24} />
          </button>
        )}

        <div className="slider-wrapper">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${(index / itemsPerView) * 100}%)` }}
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
            <ChevronRight size={24} />
          </button>
        )}
      </div>
    </div>
  );
}

function ProductSection({ onSelectItem }) {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase.from("products").select("*");

      if (error) {
        console.error("SUPABASE ERROR:", error);
        return;
      }

      // 10개씩 묶기
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
              Our Top-Tier Service<br />Is<br />Widely Used
            </h2>
          </div>

          <div className="section-service">
            <h3>Services</h3>
            <p>
              While we can customize your fashion AI plan<br />
              most clients schedule regular fashion AI services:
            </p>
          </div>
        </div>

        <div className="divider-line"></div>

        {groups.map((group, i) => (
          <ProductSlider key={i} products={group} onSelectItem={onSelectItem} />
        ))}

      </div>
    </section>
  );
}

export default ProductSection;
