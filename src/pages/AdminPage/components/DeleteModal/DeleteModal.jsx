import "./DeleteModal.css";
import { X } from "lucide-react";
import { supabase } from "../../../../api/supabase.js";

function DeleteModal({ item, onClose, onConfirm }) {

  const handleDelete = async () => {
    try {

      // ---------------------------
      // 1) Storage 이미지 삭제
      // ---------------------------
      if (item.imageurl) {
        const fileName = item.imageurl.split("/").pop();
        const filePath = `public/${fileName}`;   // ★ 핵심

        const { error: storageError } = await supabase
          .storage
          .from("product-images")
          .remove([filePath]);

        if (storageError) {
          console.error("Storage 삭제 실패:", storageError);
          alert("스토리지 이미지 삭제 실패");
          return;
        }
      }

      // ---------------------------
      // 2) DB 삭제
      // ---------------------------
      const { error: dbError } = await supabase
        .from("products")
        .delete()
        .eq("id", item.id);

      if (dbError) {
        console.error("DB 삭제 실패:", dbError);
        alert("DB 삭제 실패");
        return;
      }

      // UI 반영
      onConfirm(item.id);
      alert("삭제 완료");
      onClose();

    } catch (err) {
      console.error("삭제 오류:", err);
      alert("삭제 중 오류 발생");
    }
  };

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
          <button className="cancel" onClick={onClose}>취소</button>
          <button className="confirm" onClick={handleDelete}>확인</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
