import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Search from "../../Search/Search";
import Pagination from "../../Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import * as homeActs from "../Home.actions";
import { getFavorites } from "../Home.selectors";

import styles from "./Home.module.scss";

export type character = {
  id: number;
  name: string;
  image: string;
  gender: string;
  species: string;
  location: {
    name: string;
  };
  origin: {
    name: string;
  };
};

const Home = ({ data, currentPage }) => {
  const dispatch = useDispatch();
  const favoritesCharacters = useSelector(getFavorites);

  const favoritesHandle = (character) => {
    const CharacterExist = favoritesCharacters.some(
      (item) => item.id === character.id
    );

    CharacterExist
      ? dispatch(new homeActs.RemoveFavoritesTriger(character))
      : dispatch(new homeActs.AddFavoritesTriger(character));
  };

  return (
    <>
      <Head>
        <title>Rick and Morty Nexp App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Search />

      <Link href="/favorites">
        <a>Favorites</a>
      </Link>

      <div className={styles.container}>
        {data.characters.map((character: character) => {
          return (
            <div className={styles.item_wrapper} key={character.id}>
              <div className={styles.button_wrapper}>
                <button onClick={() => favoritesHandle(character)}>
                  Favorite
                </button>
              </div>
              <Link href={"/" + character.id}>
                <a>
                  <Image
                    src={character.image}
                    alt={character.name}
                    width={300}
                    height={300}
                  />
                  <p>{character.name}</p>
                </a>
              </Link>
            </div>
          );
        })}
      </div>

      <Pagination pages={data.pages} currentPage={currentPage} />
    </>
  );
};

export default Home;
