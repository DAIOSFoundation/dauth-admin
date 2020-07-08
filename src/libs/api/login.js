import axios from "axios";
import { jsonHeader, urls } from "../reqConf";

export const postLogin = async (param) => {
  const resp = await axios.get(
    "http://dauth.daios.net/v1/users",
    jsonHeader
  );
  return resp.data;
};
