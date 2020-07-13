import axios from "axios";
import { jsonHeader, urls } from "../reqConf";

// export const postLogin = async (param) => {
//   const resp = await axios.get("http://dauth.daios.net/v1/users", jsonHeader);
//   return resp.data;
// };

export const getProduct = async () => {
  try {
    const res = await axios.get(
      "/data/data.json"
      // "http://192.168.1.45:4000/account/web/login",
      // jsonHeader()
    );
    // return res.data;
    console.log(res.data);
  } catch (e) {
    console.error(e);
  }
};

// useEffect(() => {
//   const token = localStorage.getItem("access_token");
//   console.log("Get 실행");
//   fetch("/data/data.json")
//     .then((res) => res.json())
//     .then((res) => {
//       console.log(res.data);
//       setPostsArr(res.data);
//       setTotal(res.data.length);
//     });
// }, []);
