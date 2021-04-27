import { ActionClass } from "../../store/state";

type DataType = {
  characters: [];
};

export enum ActionsMethods {
  LOAD_CHARACTERS = "LOAD_CHARACTERS",
  ADD_CHARACTERS = "ADD_CHARACTERS",
  FAVORITES = "FAVORITES",
  UNLIKED = "UNLIKED",
  ERROR = "ERROR",
}

export class LoadCharacters extends ActionClass {
  readonly type = ActionsMethods.LOAD_CHARACTERS;

  constructor(public payload: DataType) {
    super();
  }
}

export class PutCharacters extends ActionClass {
  readonly type = ActionsMethods.ADD_CHARACTERS;

  constructor(public payload: []) {
    super();
  }
}

export class ErrorData extends ActionClass {
  readonly type = ActionsMethods.ERROR;

  constructor(public payload: string) {
    super();
  }
}

export class FavoritesCharacters extends ActionClass {
  readonly type = ActionsMethods.FAVORITES;

  constructor(public payload: []) {
    super();
  }
}

export class UnlikedCharacters extends ActionClass {
  readonly type = ActionsMethods.UNLIKED;

  constructor(public payload: []) {
    super();
  }
}

export type ActionsTypes =
  | LoadCharacters
  | PutCharacters
  | ErrorData
  | FavoritesCharacters
  | UnlikedCharacters;
