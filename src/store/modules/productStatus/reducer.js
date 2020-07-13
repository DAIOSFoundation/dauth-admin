import { handleActions } from "redux-actions";
import produce from "immer";
import * as LOGIN from "./actions";

const initialState = {
  email: "",
  password: "",
  loginSuccessMsg: "",
  loginFailedMsg: "",
  jwt: "",
};

const login = handleActions(
  {
    [LOGIN.CHANGE_EMAIL]: (state, action) => {
      return produce(state, (draft) => {
        draft.email = action.payload;
      });
    },
    [LOGIN.CHANGE_PASSWORD]: (state, action) => {
      return produce(state, (draft) => {
        draft.password = action.payload;
      });
    },
    [LOGIN.POST_LOGIN_SUCCESS]: (state, action) => {
      return produce(state, (draft) => {
        console.log("POST_LOGIN_SUCCESS => ", action.payload);
        draft.jwt = action.payload.Authentication;
      });
    },
    [LOGIN.POST_LOGIN_FAILED]: (state, action) => {
      return produce(state, (draft) => {
        console.log("POST_LOGIN_FAILED => ", action.payload.data);
        draft.loginFailedMsg = "로그인 실패...";
      });
    },
  },
  initialState
);
export default login;
