import { takeLatest } from "redux-saga/effects";
import createRequestSaga from "../../../libs/createRequestSaga";
import * as productStatusAPI from "../../../libs/api/productStatus";
import * as LOGIN from "./actions";

const postLoginSaga = createRequestSaga(
  LOGIN.POST_LOGIN,
  productStatusAPI.getProduct
);

export default function* rootSaga() {
  yield [yield takeLatest(LOGIN.POST_LOGIN, postLoginSaga)];
}
