import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import table_data from "#/__mocks__/advance.json";
import { FiChevronLeft } from "react-icons/fi";
import { TableContentInterface } from "#/interface";
import TablePagination from "#/components/common/table-pagination";

const Notification = () => {
  const table = table_data.marketing.message;
  const [page, setPage] = useState(0);
  const [filterData, setFilterData] = useState<TableContentInterface[]>();
  const n = 4;

  useEffect(() => {
    setFilterData(
      table.table_content.filter(
        (item: TableContentInterface, index: number) => {
          return index >= page * n && index < (page + 1) * n;
        }
      )
    );
  }, [page]);

  return (
    <div>
      <TableContainer
        component={Paper}
        className="border border-slate-200 rounded-xl px-5 bg-[#fbfbfc]"
      >
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              {table.table_head.map((data: any, i: number) => {
                return (
                  <TableCell
                    key={i}
                    className="font-poppins text-lg p-8 text-black"
                  >
                    {data.title}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {table.table_content.map((data: any, i: number) => {
              console.log("data", data.stat);

              return (
                <TableRow key={i} className="cursor-pointer hover:bg-[#E6F8F9]">
                  <TableCell>
                    <img src={data.thumb} alt="" />
                  </TableCell>
                  <TableCell>{data.notification}</TableCell>
                  <TableCell>
                    <div
                      className={`${
                        data.status_type === "completed" && "text-green-500"
                      } ${
                        data.status_type === "processing" && "text-blue-500"
                      } ${
                        data.status_type === "failed" && "text-red-500"
                      } font-medium`}
                    >
                      {data.status_text}
                    </div>
                  </TableCell>
                  <TableCell>{data.start}</TableCell>
                  <TableCell className="!flex !items-center gap-2">
                    <span>
                      <FiChevronLeft />
                    </span>
                    {data.sends}
                  </TableCell>
                  <TableCell>{data.opens}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <TablePagination
          onPageChange={(event: any) => setPage(event.selected)}
          pageCount={table.table_content.length / n}
        />
      </TableContainer>
    </div>
  );
};

export default Notification;
