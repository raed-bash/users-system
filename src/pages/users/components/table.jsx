import React from "react";
import MainTable from "../../../components/main-table";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

export default function Table({ setPage, page, loading }) {
  const users = useSelector((state) => state.users.users);
  const columns = [
    { field: "email", headerName: "Email", sortable: false, width: 500 },
    { field: "locked", headerName: "Status", sortable: false, width: 340 },
    {
      field: "reg_date",
      headerName: "Registration Date",
      sortable: false,
      width: 500,
    },
  ];
  const rows = users;
  return (
    <Box>
      <MainTable
        rows={rows}
        columns={columns}
        setPage={setPage}
        page={page}
        loading={loading}
      />
    </Box>
  );
}
