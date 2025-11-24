import { useState } from "react";
import "./MainPage.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import ProductSection from "./components/ProductSection/ProductSection";
import DetailPage from "./components/DetailPage/DetailPage";

function MainPage() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="M-main-container">
      <Header />
      <HeroSection />
      <ProductSection onSelectItem={setSelectedItem} />
      {selectedItem && (
        <DetailPage item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
}

export default MainPage;
