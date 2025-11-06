import "./DataTable.css";

function DataTable({ data, onSelect, onDelete }) {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>번호</th>
          <th>Title</th>
          <th>원본이미지 이름</th>
          <th>동영상 URL</th>
          <th>정보 기입</th>
          <th>등록일</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} onClick={() => onSelect(item)}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.imageName}</td>
            <td className="url">{item.videoUrl}</td>
            <td>{item.description}</td>
            <td>{item.createdAt}</td>
            <td>
              <button
                className="delete-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(item);
                }}
              >
                삭제
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
