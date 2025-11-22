import React from "react";

function Pagination({
  currentPage,
  totalItems,
  itemsPerPage = 10,
  onPageChange,
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  return (
    <div
      style={{ textAlign: "center", marginTop: "100px", paddingBottom: "40px" }}
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{ color: "rgb(118, 75, 162)"}}
      >
        Previous
      </button>

      <span style={{ margin: "0 15px" }}>
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{ color: "rgb(118, 75, 162)"}}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
