import "./RegisterModal.css";
import { X } from "lucide-react";
import { useState } from "react";

function RegisterModal({ onClose, onSave }) {
  const [form, setForm] = useState({
    title: "",
    imageName: "",
    videoUrl: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
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

        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
        />
        <input
          name="imageName"
          placeholder="이미지 이름"
          value={form.imageName}
          onChange={handleChange}
        />
        <input
          name="videoUrl"
          placeholder="동영상 URL"
          value={form.videoUrl}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="설명"
          value={form.description}
          onChange={handleChange}
        />

        <div className="btns">
          <button className="cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="save" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterModal;
