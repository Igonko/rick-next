import { SagaIterator } from "@redux-saga/types";
import { put, takeLatest, all } from "redux-saga/effects";
import * as acts from "./Home.actions";

function* getCharacters({ payload }: acts.LoadCharacters): SagaIterator {
  try {
    yield put(new acts.PutCharacters(payload.characters));
  } catch (e) {
    yield put(new acts.ErrorData(e.message));
  }
}

export default function* HomeSaga(): SagaIterator {
  yield all([
    takeLatest(acts.ActionsMethods.LOAD_CHARACTERS, getCharacters),
  ]);
}
