import {
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import IosShareIcon from "@mui/icons-material/IosShare";
import Filter from "../components/filter";
import Table from "../components/table";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadUsersAsync } from "../reducer/actions";

export default function UsersList() {
  const [filter, setFilter] = useState({});
  const [page, setPage] = useState(1);
  const [pageLoad, setPageLoad] = useState(1);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      loadUsersAsync(
        {},
        () => {},
        () => {}
      )
    );
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">All Users</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Filter
              output={(filter) => {
                setFilter(filter);
              }}
            />
          </Grid>

          <Grid item xs={12} sx={{ my: 1.4 }}>
            <Button
              variant="outlined"
              sx={{
                height: "40px",
                color: "grey",
                border: "1px solid #a9a9a9",
              }}
              endIcon={<IosShareIcon />}
            >
              Export
            </Button>
            <Box sx={{ float: "right" }}>
              <TextField
                id="input-with-icon-textfield"
                placeholder="Search For..."
                sx={{ mx: 3, width: "25vw" }}
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Button variant="contained" sx={{ height: "40px" }}>
                Add
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Table setPage={setPage} page={pageLoad} loading={loading} />
      </Grid>
    </Grid>
  );
}
