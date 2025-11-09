import "./AdminPage.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import SearchBar from "./components/SearchBar/SearchBar";
import DataTable from "./components/DataTable/DataTable";
import Pagination from "./components/Pagination/Pagination";
import RegisterModal from "./components/RegisterModal/RegisterModal";
import DeleteModal from "./components/DeleteModal/DeleteModal";
import ViewModal from "./components/ViewModal/ViewModal"; // ✅ 추가

function AdminPage() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState({ title: "", imageName: "" });
  const [selectedItem, setSelectedItem] = useState(null);

  const [showRegister, setShowRegister] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showView, setShowView] = useState(false); // ✅ 추가

  // 데이터 로드
  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setFiltered(json);
      });
  }, []);

  // 검색 기능
  const handleSearch = () => {
    const result = data.filter(
      (i) =>
        i.title.toLowerCase().includes(search.title.toLowerCase()) &&
        i.imageName.toLowerCase().includes(search.imageName.toLowerCase())
    );
    setFiltered(result);
  };

  return (
    <div className="admin-layout">
      {/* ✅ 헤더는 항상 페이지 상단 전체 */}
      <Header />

      {/* ✅ 헤더 아래에 사이드바 + 콘텐츠 나란히 배치 */}
      <div className="main-container">
        <Sidebar />

        <div className="admin-content">
          <div className="admin-inner">
            <SearchBar
              search={search}
              setSearch={setSearch}
              onSearch={handleSearch}
              onReset={() => setFiltered(data)}
            />

            <DataTable
              data={filtered}
              onSelect={(item) => {
                setSelectedItem(item);
                setShowView(true);
              }}
              onDelete={(item) => {
                setSelectedItem(item);
                setShowDelete(true);
              }}
            />

            <Pagination />

            <div className="admin-controls">
              <button
                onClick={() => setShowRegister(true)}
                className="register-btn"
              >
                등록하기
              </button>
            </div>

            {/* 등록 모달 */}
            {showRegister && (
              <RegisterModal
                onClose={() => setShowRegister(false)}
                onSave={(item) => setFiltered([...filtered, item])}
              />
            )}

            {/* 삭제 모달 */}
            {showDelete && selectedItem && (
              <DeleteModal
                item={selectedItem}
                onClose={() => setShowDelete(false)}
                onConfirm={() =>
                  setFiltered(filtered.filter((d) => d.id !== selectedItem.id))
                }
              />
            )}

            {/* 정보 보기 모달 */}
            {showView && selectedItem && (
              <ViewModal
                item={selectedItem}
                onClose={() => setShowView(false)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;