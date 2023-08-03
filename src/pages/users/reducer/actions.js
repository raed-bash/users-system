import usersSystemServer from "../../../app/server";
import { USERS } from "./endpoints";
import { loadUsers } from "./slice";

export const loadUsersAsync = (query, success, fail) => (dispatch) => {
  usersSystemServer
    .get(USERS)
    .then((res) => {
      console.log(res);
      dispatch(loadUsers(res.data));
      success();
    })
    .catch((err) => {
      console.log(err);
      fail();
    });
};
