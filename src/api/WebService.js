import axios from "axios";
import envVariables from "configs/envVariables";

const webService = axios.create({
  baseURL: envVariables.gateway,
  headers: {
    accept: "*/*",
    "Content-Type": "application/json",
    token: envVariables.token,
  },
});
export default webService;
