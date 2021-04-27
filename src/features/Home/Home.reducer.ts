import { ActionsTypes, ActionsMethods } from "./Home.actions";
import { MainType } from "./Home.state";

const initialState = {
  data: [],
  favorites: [],
  unliked: [],
  error: "",
};

export const reducer = (
  state = initialState,
  action: ActionsTypes
): MainType => {
  switch (action.type) {
    case ActionsMethods.ADD_CHARACTERS: {
      return { ...state, data: [...action.payload] };
    }
    case ActionsMethods.ERROR: {
      return { ...state, error: action.payload };
    }
    case ActionsMethods.FAVORITES: {
      return { ...state, favorites: [...action.payload] };
    }
    case ActionsMethods.UNLIKED: {
      return { ...state, unliked: [...action.payload] };
    }
    default:
      return state;
  }
};
