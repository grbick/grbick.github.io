import React, { useContext } from "react";
import "./pagination.scss";
import { homeContext } from "../../context";
import PaginationButton from "../PaginationButton";

const Pagination = () => {
  const { pageCount, responseFail, searchParams } =
    useContext(homeContext);
  const pageButtons = [];
  const currentPage = searchParams.get('page') ? parseInt(searchParams.get('page')) : 1
  pageButtons.push(
    <PaginationButton
      key="Prev"
      buttonContent="Prev"
      buttonValue={currentPage === 1 ? currentPage : currentPage - 1}
    />
  );
  if (pageCount <= 5 || currentPage === 1 || currentPage === 2) {
    for (let i = 1; i <= pageCount && i <= 5; i++) {
      pageButtons.push(
        <PaginationButton key={i} buttonContent={i} buttonValue={i} />
      );
    }
  } else if (currentPage === pageCount - 1 || currentPage === pageCount) {
    for (let i = pageCount - 4; i <= pageCount; i++) {
      pageButtons.push(
        <PaginationButton key={i} buttonContent={i} buttonValue={i} />
      );
    }
  } else {
    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
      pageButtons.push(
        <PaginationButton key={i} buttonContent={i} buttonValue={i} />
      );
    }
  }
  pageButtons.push(
    <PaginationButton
      key="Next"
      buttonContent="Next"
      buttonValue={currentPage === pageCount ? currentPage : currentPage + 1}
    />
  );
  if (pageCount > 5) {
    pageButtons.unshift(
      <PaginationButton key="First" buttonContent={"First"} buttonValue={1} />
    );
    pageButtons.push(
      <PaginationButton
        key="Last"
        buttonContent={"Last"}
        buttonValue={pageCount}
      />
    );
  }
  return (<>
    {!responseFail && pageCount > 1 && <div className="pagination">
      {pageButtons}
    </div>}
    </>
  );
};

export default Pagination;
