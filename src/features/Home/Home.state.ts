import { character } from "./components/Home";

export type MainType = {
  data: character[];
  favorites: character[];
  unliked: character[];
  error: string;
};