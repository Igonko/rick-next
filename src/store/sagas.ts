import { all, fork } from "redux-saga/effects";

import HomeSaga from "../features/Home/Home.sagas";

function* rootSaga(): Generator {
  yield all([fork(HomeSaga)]);
}

export default rootSaga;
