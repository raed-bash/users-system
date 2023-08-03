import { Box, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function Filter({ output }) {
  const [filter, setFilter] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    output({ ...filter, [name]: value });
    setFilter((n) => ({ ...n, [name]: value }));
  };
  return (
    <Box>
      <Box sx={{ border: "1px solid #e1e1e1", borderRadius: 1, p: 2 }}>
        <Typography sx={{ my: 1 }}>Filter</Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              name="status"
              label="Status"
              onChange={handleChange}
              value={filter.status}
              select
              fullWidth
              defaultValue={"no_thing"}
              size="small"
            >
              <MenuItem value="no_thing">No Thing</MenuItem>
              <MenuItem value="blocked">Blocked</MenuItem>
              <MenuItem value="unblocked">UnBlocked</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={4}>
            <TextField
              name="role"
              label="Role"
              onChange={handleChange}
              value={filter.role}
              select
              fullWidth
              defaultValue={"all_users"}
              size="small"
            >
              <MenuItem value="all_users">All Users</MenuItem>
              <MenuItem value="super_admin">Super Admin</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="Id">Id</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={4}>
            <TextField
              name="searchFor"
              label="Search By"
              onChange={handleChange}
              value={filter.searchFor}
              select
              fullWidth
              defaultValue={"email"}
              size="small"
            >
              <MenuItem value="email">Email</MenuItem>
              <MenuItem value="id">Id</MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
