import { Box, Paper } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

export default function Layout() {
  return (
    <Box sx={{ background: "#e5e5e5" }}>
      <Navbar />
      <Box sx={{ p: 6 }}>
        <Paper sx={{ height: "100%", p: 5 }} elevation={3}>
          <Outlet />
        </Paper>
      </Box>
    </Box>
  );
}
