import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import table_data from "#/__mocks__/feedback.json";
import Dropdown from "#/components/common/widgets/table-action-dropdown";
import FeedbackModal from "#/components/common/modal/FeedbackModal";
import { TableContentInterface } from "#/interface";
import TablePagination from "#/components/common/table-pagination";

const PendingResponse = () => {
  const table = table_data.pending_response;
  // state
  const [open, setOpen] = useState(false);
  // open feedback modal
  const handleOpen = () => setOpen((cur) => !cur);
  // table pagination
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
              {table.table_head.map(
                (data: TableContentInterface, i: number) => {
                  return (
                    <TableCell key={i} className="!font-poppins !text-lg !p-8 !text-black !font-medium">
                      {data.title}
                    </TableCell>
                  );
                }
              )}
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {table.table_content.map(
              (data: TableContentInterface, i: number) => {
                return (
                  <TableRow
                    key={i}
                    onClick={handleOpen}
                    className="cursor-pointer hover:bg-[#E6F8F9]"
                  >
                    <TableCell className="px-10">{data.sl_no}</TableCell>
                    <TableCell className="w-[200px]">{data.name}</TableCell>
                    <TableCell>{data.email}</TableCell>
                    <TableCell className="w-[350px]">{data.message}</TableCell>
                    <TableCell>{data.date}</TableCell>
                    <TableCell className="cursor-pointer">
                      <Dropdown />
                    </TableCell>
                  </TableRow>
                );
              }
            )}
          </TableBody>
        </Table>
        <TablePagination
          onPageChange={(event: any) => setPage(event.selected)}
          pageCount={table.table_content.length / n}
        />
      </TableContainer>
      <FeedbackModal onclickOpen={handleOpen} isOpen={open} />
    </div>
  );
};

export default PendingResponse;
