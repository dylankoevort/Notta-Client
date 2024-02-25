import axios from "axios";
import envVariables from "config/envVariables";

const webService = axios.create({
  baseURL: envVariables.gateway,
  headers: {
    "Content-Type": "application/json",
    token: envVariables.token,
  },
});
export default webService;
