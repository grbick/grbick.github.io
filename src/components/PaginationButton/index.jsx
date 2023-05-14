import React, { useContext } from "react";
import "./paginationButton.scss";
import { homeContext } from "../../context";

const PaginationButton = ({ buttonContent, buttonValue}) => {
  const {
    setFirstTenResults,
    setSearchParams,
    searchParams
  } = useContext(homeContext);
  const currentPage = searchParams.get('page') ? parseInt(searchParams.get('page')) : 1

  function goToPage(isEven) {
    const existingName = searchParams.get('name')
    existingName === null ? (parseInt(buttonValue) === 1) ?
    setSearchParams({}) :
    setSearchParams({page : buttonValue}) :
    (parseInt(buttonValue) === 1) ? 
    setSearchParams({name : existingName}) :
    setSearchParams({
      name : existingName,
      page : buttonValue
    })
    setFirstTenResults(isEven ? false : true);
    window.scrollTo(0,0)
  }
  return (
    <div
      className={`paginationButton ${currentPage === buttonContent ? "active" : ""}`}
      onClick={() => goToPage(buttonValue%2===0)}
    >
      {buttonContent}
    </div>
  );
};

export default PaginationButton;
