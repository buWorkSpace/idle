import "./AdminPage.css";
import { useState } from "react";

function AdminPage() {
  const [data, setData] = useState([
    { id: 1, title: "One-piece", video: "https://youtu.be/example1", desc: "Sample description 1" },
    { id: 2, title: "Shirts", video: "https://youtu.be/example2", desc: "Sample description 2" },
    { id: 3, title: "Jeans", video: "https://youtu.be/example3", desc: "Sample description 3" },
  ]);

  const [editing, setEditing] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  const startEdit = (id, currentTitle) => {
    setEditing(id);
    setNewTitle(currentTitle);
  };

  const saveEdit = (id) => {
    setData(data.map((item) => (item.id === id ? { ...item, title: newTitle } : item)));
    setEditing(null);
  };

  const deleteItem = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="admin-container">
      <header className="admin-header">
        <h1>관리자 페이지</h1>
        <button className="add-btn">+ 새 항목 추가</button>
      </header>

      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Video URL</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                {editing === item.id ? (
                  <input
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="edit-input"
                  />
                ) : (
                  item.title
                )}
              </td>
              <td>{item.video}</td>
              <td>{item.desc}</td>
              <td>
                {editing === item.id ? (
                  <button onClick={() => saveEdit(item.id)}>저장</button>
                ) : (
                  <button onClick={() => startEdit(item.id, item.title)}>수정</button>
                )}
                <button onClick={() => deleteItem(item.id)}>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPage;
