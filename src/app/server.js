import axios from "axios";
import authHelpers from "../utils/jwt-helpers";

const usersSystemServer = axios.create({
  baseURL: "http://localhost:8081/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${authHelpers.getJWT()}`,
  },
});
export default usersSystemServer;
