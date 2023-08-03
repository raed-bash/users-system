import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    loadUsers: (state, { payload }) => {
      state.users = payload;
    },
  },
});
export const { loadUsers } = usersSlice.actions;
export default usersSlice.reducer;
