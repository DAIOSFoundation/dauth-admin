import { createAction } from "redux-actions";
import { createRequestActionTypes } from "../../../libs/createRequestSaga";

export const CHANGE_EMAIL = "register/CHANGE_EMAIL"; // 액션 타입
export const change_email = createAction(CHANGE_EMAIL); // 액션 생성자

export const CHANGE_PASSWORD = "register/CHANGE_PASSWORD";
export const change_password = createAction(CHANGE_PASSWORD);

export const CHANGE_REPASSWORD = "register/CHANGE_REPASSWORD";
export const change_rePassword = createAction(CHANGE_REPASSWORD);

export const [
  POST_REGISTER,
  POST_REGISTER_SUCCESS,
  POST_REGISTER_FAILED,
] = createRequestActionTypes("register/POST_REGISTER");
export const post_register = createAction(POST_REGISTER);
