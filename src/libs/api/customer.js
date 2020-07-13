import axios from "axios";
import { jsonHeader, urls } from "../reqConf";

// export const postLogin = async (param) => {
//   const resp = await axios.get("http://dauth.daios.net/v1/users", jsonHeader);
//   return resp.data;
// };

export const getCustomer = (setPostsArr, setTotal, total) => {
  axios.get("/data/userdata.json").then((res) => {
    console.log(res.data);
    setPostsArr(res.data.data);
    setTotal(res.data.data.length);
  });
};

// axios.get("/data/userdata.json").then((res) => {
//   console.log(res.data);
//   setPostsArr(res.data.data);
//   setTotal(res.data.data.length);
// });

export const postCustomer = (params) => {
  console.log("params!!!!! : ", params);
  axios
    .post(
      "http://192.168.1.45:4000/customer/web/searchuser",
      params,
      jsonHeader()
    )
    .then((res) => {
      console.log("데이터!!!!!! : ", res.data);
    });
};
