import axios from "axios";
import { jsonHeader } from "../reqConf";

export const postRegister = async (param) => {
  console.log("params: ", param);
  try {
    const res = await axios.post(
      "http://192.168.1.45:4000/account/web/register",
      param,
      jsonHeader()
    );
    return res.data;
  } catch (e) {
    console.error(e);
  }
};
