import axios from "axios";
import { jsonHeader, urls } from "../reqConf";

// export const postLogin = async (param) => {
//   const resp = await axios.get("http://dauth.daios.net/v1/users", jsonHeader);
//   return resp.data;
// };

export const postLogin = async (param) => {
  console.log("params: ", param);
  try {
    const res = await axios.post(
      "http://192.168.1.45:4000/account/web/login",
      param,
      jsonHeader()
    );
    console.log("res: ", res);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};
