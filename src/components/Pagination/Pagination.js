import React, { useState } from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [pageInput, setPageInput] = useState(currentPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handleInputChange = (event) => {
    setPageInput(event.target.value);
  };

  const handleInputBlur = () => {
    const page = parseInt(pageInput);
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
      setPageInput(page);
    } else {
      setPageInput(currentPage);
    }
  };

  const handlePrevClick = () => {
    handlePageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    handlePageChange(currentPage + 1);
  };

  return (
    <div className="pagination">
      <button
        className="pagination__button pagination__button--prev"
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <input
        className="pagination__input"
        type="number"
        value={pageInput}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      <span className="pagination__total-pages">{`of ${totalPages}`}</span>
      <button
        className="pagination__button pagination__button--next"
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;