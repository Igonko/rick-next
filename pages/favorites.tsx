import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../src/features/Home/Home.selectors";
import * as homeActs from "../src/features/Home/Home.actions";
import { character } from "../src/features/Home/components/Home";

import styles from "../src/features/Home/components/Home.module.scss";

const Favorites = () => {
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
    <div>
      <h1>Favorites</h1>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>

      <div className={styles.container}>
        {favoritesCharacters.map((character: character) => {
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
    </div>
  );
};
export default Favorites;
