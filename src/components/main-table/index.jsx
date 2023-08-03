import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import UsePagination from "./components/usePagination";

export default function MainTable({
  rows,
  columns,
  loading,
  perPage = 10,
  page,
  total,
  setPage,
}) {
  return (
    <div>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        disableColumnMenu
        rowHeight={39}
        rowsPerPageOptions={[10]}
        slots={{
          pagination: () =>
            UsePagination({
              setPage: setPage,
              page: page,
              perPage: perPage,
              total: total,
            }),
        }}
      />
    </div>
  );
}
