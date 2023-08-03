import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../pages/users/reducer/slice";
export default configureStore({ reducer: { users: usersReducer } });
