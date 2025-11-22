import "./Pagination.css";

function Pagination({ currentPage, totalPage, onPageChange }) {
  const prevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage < totalPage) onPageChange(currentPage + 1);
  };

  return (
    <div className="pagination">
      <button onClick={prevPage} disabled={currentPage === 1}>
        {"<"}
      </button>

      <span>
        {currentPage} / {totalPage}
      </span>

      <button onClick={nextPage} disabled={currentPage === totalPage}>
        {">"}
      </button>
    </div>
  );
}

export default Pagination;
