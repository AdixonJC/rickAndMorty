import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharacters, setCurrentPage, setNextPage } from "../../store/slices/characterSlices/characterSlice";
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
  console.log(nextPage);
  const handlePrevPage = () => {
    const prevPageNumber = parseInt(prevPage.split("=").pop())
      dispatch(setNextPage(prevPageNumber))
      dispatch(setCurrentPage(prevPageNumber))
  }


  const handlePageClick = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber))
  }
  

  console.log({ nextPage, prevPage, currentPage, visiblePages });

  return (
    <div>
      <button onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
      {visiblePages.map(page => (
        <button key={page} onClick={() => handlePageClick(page)}>{page}</button>
      ))}
      {
        currentPage + Math.floor(visiblePages.length / 2) < totalPages && (
          <span>...</span>
        )
      }
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={handleNextPage}  disabled={currentPage === totalPages}>Next</button>
    </div>
  );
};

export default Pagination;
