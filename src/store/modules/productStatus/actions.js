import { createAction } from "redux-actions";
import { createRequestActionTypes } from "../../../libs/createRequestSaga";

export const CHANGE_EMAIL = "login/CHANGE_EMAIL";
export const change_email = createAction(CHANGE_EMAIL);

export const CHANGE_PASSWORD = "login/CHANGE_PASSWORD";
export const change_password = createAction(CHANGE_PASSWORD);

//로그인 버튼 클릭
export const [
  POST_LOGIN,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILED,
] = createRequestActionTypes("login/POST_LOGIN");
export const post_login = createAction(POST_LOGIN);
