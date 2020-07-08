import { takeLatest } from "redux-saga/effects";
import createRequestSaga from "../../../libs/createRequestSaga";
import * as loginAPI from "../../../libs/api/login";
import * as LOGIN from "./actions";

const postLoginSaga = createRequestSaga(LOGIN.POST_LOGIN, loginAPI.postLogin);

export default function* rootSaga() {
  yield [
    yield takeLatest(LOGIN.POST_LOGIN, postLoginSaga),
  ];
}
