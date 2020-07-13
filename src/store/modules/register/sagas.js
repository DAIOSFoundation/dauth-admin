import { takeLatest } from "redux-saga/effects";
import createRequestSaga from "../../../libs/createRequestSaga";
import * as registerAPI from "../../../libs/api/register";
import * as REGISTER from "./actions";

const postRegisterSaga = createRequestSaga(
  REGISTER.POST_REGISTER,
  registerAPI.postRegister
);

export default function* rootSaga() {
  yield [yield takeLatest(REGISTER.POST_REGISTER, postRegisterSaga)];
}
