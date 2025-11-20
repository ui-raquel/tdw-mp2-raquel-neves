import React from 'react';

function Pagination({ currentPage, totalItems, itemsPerPage = 10, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <button 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      
      <span style={{ margin: '0 15px' }}>
        Page {currentPage} of {totalPages}
      </span>
      
      <button 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;