import { SagaIterator } from "@redux-saga/types";
import { put, takeLatest, all } from "redux-saga/effects";
import * as acts from "./Home.actions";

function* favoriteCharactersAdd({
  payload,
}: acts.AddFavoritesTriger): SagaIterator {
  yield put(new acts.FavoritesCharacters(payload));
}

function* favoriteCharactersRemove({
  payload,
}: acts.RemoveFavoritesTriger): SagaIterator {
  yield put(new acts.FavoritesCharactersRemove(payload));
}

export default function* HomeSaga(): SagaIterator {
  yield all([
    takeLatest(
      acts.ActionsMethods.TRIGGER_FAVORITES_ADD,
      favoriteCharactersAdd
    ),
    takeLatest(
      acts.ActionsMethods.TRIGGER_FAVORITES_REMOVE,
      favoriteCharactersRemove
    ),
  ]);
}
