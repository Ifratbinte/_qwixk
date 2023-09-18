import React from "react";
import { IconContext } from "react-icons";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import ReactPaginate from "react-paginate";

interface PaginationInterface {
  onPageChange: (event:any) => void;
  pageCount: any;
}

const TablePagination: React.FC<PaginationInterface> = ({
  onPageChange,
  pageCount,
}) => {
  return (
    <ReactPaginate
      containerClassName={
        "pagination flex items-center justify-center my-10 gap-8 w-full"
      }
      pageClassName={"page-item hidden mx-4 font-medium"}
      activeClassName={"active text-green-500 "}
      onPageChange={onPageChange}
      pageCount={Math.ceil(pageCount)}
      breakLabel="..."
      previousLabel={
        <IconContext.Provider value={{ color: "#2e2d2d", size: "32px" }}>
          <FaLongArrowAltLeft />
        </IconContext.Provider>
      }
      nextLabel={
        <IconContext.Provider value={{ color: "#2e2d2d", size: "32px" }}>
          <FaLongArrowAltRight />
        </IconContext.Provider>
      }
    />
  );
};

export default TablePagination;
