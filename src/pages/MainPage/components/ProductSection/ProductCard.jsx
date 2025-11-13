import "./ProductSection.css";

function ProductCard({ item, onSelectItem }) {
  return (
    <div className="product-card" onClick={() => onSelectItem?.(item)}>
      <img 
        src={`${import.meta.env.BASE_URL}${item.imageName}`} 
        alt={item.title} 
      />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <button className="view-btn">
        View Samples <span>→</span>
      </button>
    </div>
  );
}

export default ProductCard;
