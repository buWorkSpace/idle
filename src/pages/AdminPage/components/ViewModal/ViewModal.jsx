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

        <label>Title</label>
        <input type="text" value={item.title} readOnly />

        <label>원본이미지 파일</label>
        <input type="text" value={item.imageName} readOnly />

        <label>동영상 URL</label>
        <input type="text" value={item.videoUrl} readOnly />

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
