import { handleActions } from "redux-actions";
import produce from "immer";
import * as REGISTER from "./actions";

const initialState = {
  email: "",
  password: "",
  rePassword: "",
  registerSuccessMsg: "",
  registerFailedMsg: "",
};

const register = handleActions(
  {
    [REGISTER.CHANGE_EMAIL]: (state, action) => {
      return produce(state, (draft) => {
        draft.email = action.payload;
      });
    },
    [REGISTER.CHANGE_PASSWORD]: (state, action) => {
      return produce(state, (draft) => {
        draft.password = action.payload;
      });
    },
    [REGISTER.CHANGE_REPASSWORD]: (state, action) => {
      return produce(state, (draft) => {
        draft.rePassword = action.payload;
      });
    },
    [REGISTER.POST_REGISTER_SUCCESS]: (state, action) => {
      return produce(state, (draft) => {
        console.log("POST_REGISTER_SUCCESS => ", action.payload);
        draft.registerSuccessMsg = action.payload.Authentication;
      });
    },
    [REGISTER.POST_REGISTER_FAILED]: (state, action) => {
      return produce(state, (draft) => {
        console.log("POST_REGISTER_FAILED => ", action.payload.data);
        draft.registerFailedMsg = "회원가입 실패...";
      });
    },
  },
  initialState
);

export default register;
