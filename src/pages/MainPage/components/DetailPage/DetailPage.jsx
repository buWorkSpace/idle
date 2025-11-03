import "./DetailPage.css";

function DetailPage({ item, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="close-btn" onClick={onClose}>×</button>
        <img src={item.img} alt={item.name} />
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
        <button>Service Shortcut</button>
      </div>
    </div>
  );
}

export default DetailPage;
