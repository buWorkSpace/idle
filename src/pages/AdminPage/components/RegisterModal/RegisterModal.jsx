import "./RegisterModal.css";
import { X } from "lucide-react";
import { useState } from "react";
import { supabase } from "../../../../api/supabase.js";

function RegisterModal({ onClose, onSave }) {
  const [form, setForm] = useState({
    title: "",
    videoUrl: "",
    description: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [imageFileName, setImageFileName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((prev) => ({ ...prev, imageName: file.name }));
    }
  };

  const handleSubmit = () => {
    if (!form.title || !form.imageName)
      return alert("Title과 이미지 이름은 필수입니다.");
    onSave({ ...form, createdAt: new Date().toISOString().split("T")[0] });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <X size={18} />
        </button>

        <h3>정보 등록</h3>

        <label>Title</label>
        <input
          name="title"
          placeholder="상품명"
          value={form.title}
          onChange={handleChange}
        />

        <label>원본이미지 파일</label>
        <div className="file-input-row">
          <input type="text" value={imageFileName} placeholder="이미지 파일 선택" readOnly />
          <input
            type="file"
            id="imgFileInput"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileSelect}
          />
          <input
            type="file"
            id="imageFileInput"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileSelect}
          />
          <button
            className="open-btn"
            onClick={() => document.getElementById("imageFileInput").click()}
          >
            Open
          </button>
        </div>

        <label>동영상 URL</label>
        <input
          name="videoUrl"
          placeholder="https://www.youtube.com/watch?v=xxxx"
          value={form.videoUrl}
          onChange={handleChange}
        />

        <label>설명</label>
        <textarea
          name="description"
          placeholder="설명 입력"
          value={form.description}
          onChange={handleChange}
        />

        <div className="btns">
          <button className="cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="delete" onClick={handleSubmit}>
            등록하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterModal;
