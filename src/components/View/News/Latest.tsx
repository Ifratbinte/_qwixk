import LatestPost from "#/components/common/post/LatestPost";
import React from "react";
import post_data from "#/__mocks__/article.json";
import ReactPaginate from "react-paginate"; // for pagination
import { IconContext } from "react-icons"; // for customizing icons
import { useEffect, useState } from "react";

const Latest = () => {
  const latestPostData: any = post_data.blog.latest_post;
  const [page, setPage] = useState(0);
  const [filterData, setFilterData] = useState();
  const n = 3;

  useEffect(() => {
    setFilterData(
      latestPostData.filter((item: any, index: number) => {
        return index >= page * n && index < (page + 1) * n;
      })
    );
  }, [page]);

  console.log("filterData", filterData);

  return (
    <>
      {filterData &&
        filterData.map((item: any, index: number) => {
          return (
            <LatestPost
              key={index}
              thumb={item.thumb}
              category={item.category}
              post_title={item.post_title}
              desc={item.post_desc}
              post_wgd={item.post_wgd}
            />
          );
        })}
      <ReactPaginate
        containerClassName={
          "pagination flex items-center justify-center md:mt-20 mt-0"
        }
        pageClassName={"page-item mx-4 font-medium"}
        activeClassName={"active text-green-500 "}
        onPageChange={(event) => setPage(event.selected)}
        pageCount={Math.ceil(latestPostData.length / n)}
        breakLabel="..."
        previousLabel={
          <IconContext.Provider value={{ color: "#2e2d2d", size: "32px" }}>
            <img src="./images/icon/svg/arrow-left.svg" alt="" />
          </IconContext.Provider>
        }
        nextLabel={
          <IconContext.Provider value={{ color: "#2e2d2d", size: "32px" }}>
            <img src="./images/icon/svg/arrow-right.svg" alt="" />
          </IconContext.Provider>
        }
      />
    </>
  );
};

export default Latest;
