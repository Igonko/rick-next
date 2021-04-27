import { ActionClass } from "../../store/state";
import { character } from "../Home/components/Home";

type DataType = {
  characters: [];
};

export enum ActionsMethods {
  TRIGGER_FAVORITES_ADD = "[HOME] trigger_favorites_add",
  FAVORITES = "[HOME] favorites",
  FAVORITES_REMOVE = "[HOME] favorites_remove",
  TRIGGER_FAVORITES_REMOVE = "[HOME] trigger_favorites_remove",
  ERROR = "[HOME] error",
}

export class AddFavoritesTriger extends ActionClass {
  readonly type = ActionsMethods.TRIGGER_FAVORITES_ADD;

  constructor(public payload: character) {
    super();
  }
}

export class FavoritesCharacters extends ActionClass {
  readonly type = ActionsMethods.FAVORITES;

  constructor(public payload: character) {
    super();
  }
}

export class RemoveFavoritesTriger extends ActionClass {
  readonly type = ActionsMethods.TRIGGER_FAVORITES_REMOVE;

  constructor(public payload: character) {
    super();
  }
}

export class FavoritesCharactersRemove extends ActionClass {
  readonly type = ActionsMethods.FAVORITES_REMOVE;

  constructor(public payload: character) {
    super();
  }
}

export class ErrorData extends ActionClass {
  readonly type = ActionsMethods.ERROR;

  constructor(public payload: string) {
    super();
  }
}

export type ActionsTypes =
  | ErrorData
  | FavoritesCharacters
  | FavoritesCharactersRemove
  | RemoveFavoritesTriger;
