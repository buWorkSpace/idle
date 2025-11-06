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
