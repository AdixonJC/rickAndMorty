import React from "react";

const Pagination = ({totalPages, currentPage, nextPage, prevPage }) => {
  return (
    <div>
      <button>Prev</button>
      <span>Page {currentPage} of {totalPages}</span>
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default Pagination
