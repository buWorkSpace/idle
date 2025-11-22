import "./AdminPage.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import SearchBar from "./components/SearchBar/SearchBar";
import DataTable from "./components/DataTable/DataTable";
import Pagination from "./components/Pagination/Pagination";
import RegisterModal from "./components/RegisterModal/RegisterModal";
import DeleteModal from "./components/DeleteModal/DeleteModal";
import ViewModal from "./components/ViewModal/ViewModal";
import { supabase } from "../../api/supabase.js";

function AdminPage() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState({ title: "", imageName: "" });
  const [selectedItem, setSelectedItem] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const [showRegister, setShowRegister] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showView, setShowView] = useState(false);

  // ----------------------------------------------------
  // 데이터 불러오기
  // ----------------------------------------------------
  useEffect(() => {
    async function fetchProducts() {
      const { data: products, error } = await supabase
        .from("products")
        .select("*")
        .order("id");

      if (error) {
        console.error("Supabase 불러오기 오류:", error);
        return;
      }

      setData(products);
      setFiltered(products);
    }

    fetchProducts();
  }, []);

  // ----------------------------------------------------
  // 검색 기능
  // ----------------------------------------------------
  const handleSearch = () => {
    const result = data.filter(
      (i) =>
        i.title.toLowerCase().includes(search.title.toLowerCase()) &&
        i.imageurl.toLowerCase().includes(search.imageName.toLowerCase())
    );

    setFiltered(result);
    setCurrentPage(1);
  };

  // ----------------------------------------------------
  // 페이지네이션 계산
  // ----------------------------------------------------
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedData = filtered.slice(start, end);

  return (
    <div className="admin-layout">
      <Header />

      <div className="main-container">
        <Sidebar />

        <div className="admin-content">
          <div className="admin-inner">

            {/* 검색 */}
            <SearchBar
              search={search}
              setSearch={setSearch}
              onSearch={handleSearch}
              onReset={() => {
                setFiltered(data);
                setCurrentPage(1);
              }}
            />

            {/* 테이블 */}
            <DataTable
              data={paginatedData}
              onSelect={(item) => {
                setSelectedItem(item);
                setShowView(true);
              }}
              onDelete={(item) => {
                setSelectedItem(item);
                setShowDelete(true);
              }}
            />

            <Pagination
              currentPage={currentPage}
              totalPage={Math.ceil(filtered.length / itemsPerPage)}
              onPageChange={setCurrentPage}
            />

            {/* 등록 버튼 */}
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
                onSave={(newItem) => {
                  const updated = [...data, newItem];
                  setData(updated);
                  setFiltered(updated);
                  setCurrentPage(1);
                }}
              />
            )}

            {/* 삭제 모달 */}
            {showDelete && selectedItem && (
              <DeleteModal
                item={selectedItem}
                onClose={() => setShowDelete(false)}
                onConfirm={(deletedId) => {
                  // DeleteModal이 DB + Storage 삭제 완료한 뒤 호출하는 부분
                  const updated = data.filter((d) => d.id !== deletedId);
                  setData(updated);
                  setFiltered(updated);
                }}
              />
            )}

            {/* 상세보기 모달 */}
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
