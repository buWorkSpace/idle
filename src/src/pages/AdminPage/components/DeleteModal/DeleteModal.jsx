import "./DeleteModal.css";
import { X } from "lucide-react";

function DeleteModal({ item, onClose, onConfirm }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="delete-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <X size={18} />
        </button>
        <p>
          <strong>{item.title}</strong>을(를) 삭제하시겠습니까?
        </p>
        <div className="btns">
          <button className="cancel" onClick={onClose}>
            취소
          </button>
          <button className="confirm" onClick={onConfirm}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
