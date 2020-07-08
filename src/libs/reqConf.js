// const host = "https://naver.com/v1";
const host = "http://192.168.0.101:80/v1";

export const urls = {
  authsJwt: host + "/auths/jwt",
  clients: host + "/clients",
  login: host + "/admins",
};

export const jsonHeader = () => {
  return {
    "Content-Type": "application/json",
  };
};

export const jsonUserTokenHeader = (token) => {
  return {
    "Content-Type": "application/json",
    user_token: token,
  };
};

export const headers = (token) => {
  return {
    "Content-Type": "application/json",
    "x-access-token": token,
  };
};

export const formDataHeaders = (token) => {
  return {
    "Content-Type": "multipart/form-data",
    "x-access-token": token,
  };
};

export const jsonClientTokenHeader = (token) => {
  return {
    "Content-Type": "application/json",
    client_token: token,
  };
};

export const objToFormData = (obj) => {
  const formData = new FormData();

  // for (const key in obj) {
  //   if ([key] !== null && typeof obj[key] !== "undefined") {
  //     if (Array.isArray(obj[key])) {
  //       if (!obj[key].length) continue;
  //       formData.append(key, obj[key]);
  //     } else {
  //       formData.set(key, obj[key]);
  //     }
  //   }
  // }

  for (const key in obj) {
    // if (obj[key] !== null && typeof obj[key] !== "undefined") {
    //   if (Array.isArray(obj[key])) {
    //     if (!obj[key].length) continue;
    //     // keys.push({ name: key, data: JSON.stringify(obj[key]) });
    //     formData.append(key, obj[key]);
    //   } else if (
    //     typeof obj[key] === "object" &&
    //     obj[key].path !== "undefined"
    //   ) {
    //     formData.append(key, obj[key]);
    //   }
    // } else {
    //   formData.set();
    // }
    formData.append(key, obj[key]);
  }

  // for (var i in formData) {
  //   console.log("keys ==> ", i);
  //   console.log("value ==> ", formData[i]);
  // }

  for (var i of formData.keys()) {
    if (i === "productDescription") {
      console.log("i ==> ", i);
    }
  }
  console.log("formData ==> ", formData);

  console.log("productDescription ===> ", formData.get("productDescription"));

  for (var i of formData.values()) {
    console.log("value ==> ", i);
  }

  return formData;
};
