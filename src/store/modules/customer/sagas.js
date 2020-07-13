import { takeLatest } from "redux-saga/effects";
import createRequestSaga from "../../../libs/createRequestSaga";
import * as customerAPI from "../../../libs/api/customer";
import * as CUSTOMER from "./actions";

const postCustomerSaga = createRequestSaga(
  CUSTOMER.POST_CUSTOMER,
  customerAPI.postCustomer
);

export default function* rootSaga() {
  yield [yield takeLatest(CUSTOMER.POST_CUSTOMER, postCustomerSaga)];
}
