import { createAction } from "redux-actions";
import { createRequestActionTypes } from "../../../libs/createRequestSaga";

export const CHANGE_EMAIL = "login/CHANGE_EMAIL"; //액션
export const change_email = createAction(CHANGE_EMAIL);

export const CHANGE_PASSWORD = "login/CHANGE_PASSWORD";
export const change_password = createAction(CHANGE_PASSWORD);

// 메세지 클리어
export const RESET_MESSAGE = "login/RESET_MESSAGE";
export const reset_message = createAction(RESET_MESSAGE);

//로그인 버튼 클릭
export const [
  POST_LOGIN,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILED,
] = createRequestActionTypes("login/POST_LOGIN");
export const post_login = createAction(POST_LOGIN);
