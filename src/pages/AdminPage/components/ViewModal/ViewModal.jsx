import "./ViewModal.css";
import { X } from "lucide-react";

function ViewModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <X size={18} />
        </button>

        <h3>정보 보기</h3>

        {/* 이미지 미리보기 */}
        <div className="image-preview">
          <img src={item.imageurl} alt={item.title} />
        </div>

        <label>Title</label>
        <input type="text" value={item.title} readOnly />

        <label>이미지 URL</label>
        <input type="text" value={item.imageurl} readOnly />

        <label>동영상 URL</label>
        <input type="text" value={item.videourl} readOnly />

        <div className="btns">
          <button className="cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewModal;
