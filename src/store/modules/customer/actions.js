import { createAction } from "redux-actions";
import { createRequestActionTypes } from "../../../libs/createRequestSaga";

export const CHANGE_STARTDATE = "customer/CHANGE_STARTDATE";
export const change_startDate = createAction(CHANGE_STARTDATE);

export const CHANGE_ENDDATE = "customer/CHANGE_ENDDATE";
export const change_endDate = createAction(CHANGE_ENDDATE);

export const CHANGE_NAME = "customer/CHANGE_NAME";
export const change_name = createAction(CHANGE_NAME);

//로그인 버튼 클릭
export const [
  POST_CUSTOMER,
  POST_CUSTOMER_SUCCESS,
  POST_CUSTOMER_FAILED,
] = createRequestActionTypes("customer/POST_CUSTOMER");
export const post_customer = createAction(POST_CUSTOMER);
