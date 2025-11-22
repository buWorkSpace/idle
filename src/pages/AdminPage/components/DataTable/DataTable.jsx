import "./DataTable.css";

function DataTable({ data, onSelect, onDelete }) {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>번호</th>
          <th>Title</th>
          <th>이미지 파일명</th>
          <th>동영상 URL</th>
          <th>정보 기입</th>
          <th>등록일</th>
          <th>삭제</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.id} onClick={() => onSelect(item)}>
            {/* 번호 */}
            <td>{item.id}</td>

            {/* 제목 */}
            <td>{item.title}</td>

            {/* 이미지 파일명만 추출 (Supabase URL에서 파일명만 가져오기) */}
            <td>
              {item.imageurl ? item.imageurl.split("/").pop() : "-"}
            </td>

            {/* 영상 URL */}
            <td className="url">{item.videourl}</td>

            {/* 설명 */}
            <td>{item.description}</td>

            {/* 등록일 (yyyy-mm-dd만) */}
            <td>{item.createdat?.slice(0, 10)}</td>

            {/* 삭제버튼 */}
            <td>
              <button
                className="delete-btn"
                onClick={(e) => {
                  e.stopPropagation(); // Row 클릭 방지
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
