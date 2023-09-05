import LatestPost from "#/components/common/post/LatestPost";
import React from "react";
import post_data from "#/__mocks__/article.json";
import ReactPaginate from "react-paginate"; // for pagination
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa"; // icons form react-icons
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
        containerClassName={"pagination flex items-center justify-center mt-20"}
        pageClassName={"page-item mx-4 font-medium"}
        activeClassName={"active text-green-500 "}
        onPageChange={(event) => setPage(event.selected)}
        pageCount={Math.ceil(latestPostData.length / n)}
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
      {/* {latestPostData.map((post_data: any, i: number) => {
        return (
          <LatestPost
            key={i}
            thumb={post_data.thumb}
            category={post_data.category}
            post_title={post_data.post_title}
            desc={post_data.post_desc}
            post_wgd={post_data.post_wgd}
          />
        );
      })} */}
    </>
  );
};

export default Latest;
