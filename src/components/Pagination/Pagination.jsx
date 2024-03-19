import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharacters, setCurrentPage, setNextPage } from "../../store/slices/characterSlices/characterSlice";
import "./pagination.css"
const Pagination = ({ totalPages }) => {
  const dispatch = useDispatch();
  const [visiblePages, setVisiblePages] = useState([])

  const { nextPage, prevPage, currentPage } = useSelector(
    ({ characters }) => characters
  );

  
  // console.log(parseNextPage(nextPage));
  
  useEffect(() => {
    dispatch(getAllCharacters(currentPage))
  },[dispatch,currentPage])
  
  
  
  const calculateVisiblePages = () => {
    const visibleRange = 5;
    const minPage = Math.max(1, currentPage - Math.floor(visibleRange / 2));
    const maxPage = Math.min(totalPages, minPage + visibleRange - 1);
    const pages = []
    
    for (let i = minPage; i <= maxPage; i++) {
      pages.push(i);
    }
    
    setVisiblePages(pages);
  }
  
  useEffect(() => {
    setVisiblePages([])
    calculateVisiblePages()
  }, [totalPages,currentPage])

  const handleNextPage = () => {
      const nextPageNumber = parseInt(nextPage.split("=").pop())
      dispatch(setNextPage(nextPageNumber))
      dispatch(setCurrentPage(nextPageNumber))
    }
    
  const handlePrevPage = () => {
    const prevPageNumber = parseInt(prevPage.split("=").pop())
      dispatch(setNextPage(prevPageNumber))
      dispatch(setCurrentPage(prevPageNumber))
  }


  const handlePageClick = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber))
  }

  return (
    <div className="pagination__container">
      <div className="numbers__pages__container">
      <button onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
      {visiblePages.map(page => (
        <button className="buttons__pagination" key={page} onClick={() => handlePageClick(page)}>{page}</button>
      ))}
      {
        currentPage + Math.floor(visiblePages.length / 2) < totalPages && (
          <span>...</span>
        )
      }
      <button onClick={handleNextPage}  disabled={currentPage === totalPages}>Next</button>
      </div>
      <span>
        Page {currentPage} / {totalPages}
      </span>
    </div>
  );
};

export default Pagination;
