import "./SearchBar.css";

function SearchBar({ search, setSearch, onSearch, onReset }) {
  return (
    <div className="search-bar">
      <div className="search-inputs">
        <div>
          <label>Title</label>
          <input
            type="text"
            placeholder="Placeholder"
            value={search.title}
            onChange={(e) => setSearch({ ...search, title: e.target.value })}
          />
        </div>
        <div>
          <label>원본이미지 이름</label>
          <input
            type="text"
            placeholder="Placeholder"
            value={search.imageName}
            onChange={(e) =>
              setSearch({ ...search, imageName: e.target.value })
            }
          />
        </div>
      </div>

      {/* 추가된 드롭다운 영역 */}
      <div className="search-selects">
        <div>
          <label>유저권한</label>
          <select>
            <option>전체</option>
            <option>관리자</option>
            <option>일반사용자</option>
          </select>
        </div>
        <div>
          <label>삭제대기 여부</label>
          <select>
            <option>전체</option>
            <option>Y</option>
            <option>N</option>
          </select>
        </div>
      </div>

      <div className="search-btns">
        <button className="search" onClick={onSearch}>
          검색
        </button>
        <button className="reset" onClick={onReset}>
          초기화
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
