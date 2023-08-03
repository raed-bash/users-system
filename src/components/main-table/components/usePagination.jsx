import { Box, IconButton, List, Typography } from "@mui/material";
import usePagination from "@mui/material/usePagination/usePagination";
import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function UsePagination({ setPage, page, total = 30, perPage }) {
  const { items } = usePagination({
    siblingCount: 2,
    count: Math.ceil(total / perPage),
    page: page,
    onChange: (e, page) => setPage(page),
  });
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <Typography sx={{ mx: 1, ml: 5 }}>Page:</Typography>
      <nav>
        <List sx={{ alignItems: "center", display: "flex" }}>
          {items.map(({ page, type, selected, ...item }, index) => {
            let children = null;

            if (type === "start-ellipsis" || type === "end-ellipsis") {
              children = "…";
            } else if (type === "page") {
              children = (
                <Box
                  sx={{
                    fontWeight: selected ? "bold" : undefined,
                    color: selected ? "primary.main" : "",
                    borderBottom: selected ? "" : "1px solid #000",
                    cursor: selected ? "default" : "pointer",
                    margin: "auto 8px",
                  }}
                  {...item}
                  {...{ ...(selected && { onClick: null }) }}
                >
                  {page}
                </Box>
              );
            } else {
              children = (
                <IconButton
                  {...item}
                  sx={{
                    cursor: "pointer",
                    color: "#1565C0",
                  }}
                >
                  {type === "previous" ? (
                    <KeyboardArrowLeftIcon />
                  ) : (
                    <KeyboardArrowRightIcon />
                  )}
                </IconButton>
              );
            }

            return <li key={index}>{children}</li>;
          })}
        </List>
      </nav>
    </Box>
  );
}
