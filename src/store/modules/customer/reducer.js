import { handleActions } from "redux-actions";
import produce from "immer";
import * as CUSTOMER from "./actions";

const initialState = {
  startDate: "",
  endDate: "",
  name: "",
  SuccessMsg: "",
  FailedMsg: "",
  jwt: "",
};

const customer = handleActions(
  {
    [CUSTOMER.CHANGE_STARTDATE]: (state, action) => {
      return produce(state, (draft) => {
        draft.startDate = action.payload;
      });
    },
    [CUSTOMER.CHANGE_ENDDATE]: (state, action) => {
      return produce(state, (draft) => {
        draft.endDate = action.payload;
      });
    },
    [CUSTOMER.POST_CUSTOMER_SUCCESS]: (state, action) => {
      return produce(state, (draft) => {
        console.log("POST_CUSTOMER_SUCCESS => ", action.payload);
        draft.jwt = action.payload.Authentication;
      });
    },
    [CUSTOMER.POST_CUSTOMER_FAILED]: (state, action) => {
      return produce(state, (draft) => {
        console.log("POST_CUSTOMER_FAILED => ", action.payload.data);
        draft.FailedMsg = "검색 실패...";
      });
    },
  },
  initialState
);
export default customer;
