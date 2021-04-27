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
    case ActionsMethods.ERROR: {
      return { ...state, error: action.payload };
    }
    case ActionsMethods.FAVORITES: {
      return { ...state, favorites: [...state.favorites, action.payload] };
    }
    case ActionsMethods.FAVORITES_REMOVE: {
      const newFavorites = state.favorites.filter((item) => {
        return item.id !== action.payload.id;
      });
      return { ...state, favorites: [...newFavorites] };
    }
    default:
      return state;
  }
};
