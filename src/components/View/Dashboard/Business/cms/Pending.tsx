import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import table_data from "#/__mocks__/advance.json";
import Dropdown from "#/components/common/widgets/table-action-dropdown";
import { TableContentInterface } from "#/interface";
import TablePagination from "#/components/common/table-pagination";

const Recent = () => {
  const table = table_data.cms.recent;
  console.log("table_row", table.table_content);
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
              <TableCell></TableCell>
              {table.table_head.map(
                (data: TableContentInterface, i: number) => {
                  return (
                    <TableCell
                      key={i}
                      className="font-poppins text-lg p-8 text-black"
                    >
                      {data.title}
                    </TableCell>
                  );
                }
              )}
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filterData &&
              filterData.map((data: TableContentInterface, i: number) => {
                return (
                  <TableRow
                    key={i}
                    className="cursor-pointer hover:bg-[#E6F8F9]"
                  >
                    <TableCell>
                      <img src="/images/icon/notify.png" alt="" />
                    </TableCell>
                    <TableCell>{data.cin}</TableCell>
                    <TableCell className="w-[280px]">{data.title}</TableCell>
                    <TableCell>{data.category}</TableCell>
                    <TableCell>{data.location}</TableCell>
                    <TableCell>{data.date}</TableCell>
                    <TableCell className="cursor-pointer">
                      <Dropdown />
                    </TableCell>
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

export default Recent;
