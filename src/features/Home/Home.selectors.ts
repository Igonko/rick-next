import { AppInterface } from "../../store/state";
import { character } from "../Home/components/Home";

export const getFavorites = ({
  characters: { favorites },
}: AppInterface): character[] => favorites;
