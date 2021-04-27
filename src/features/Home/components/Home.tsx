import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Search from "../../Search/Search";
import Pagination from "../../Pagination/Pagination";
import { useDispatch } from "react-redux";
import * as homeActs from "../Home.actions";
import { useEffect } from "react";

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
  
  useEffect(() => {
    dispatch(new homeActs.LoadCharacters(data.characters));
  }, []);

  return (
    <>
      <Head>
        <title>Rick and Morty Nexp App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Search />

      <div className={styles.container}>
        {data.characters.map((character: character) => {
          return (
            <Link href={"/" + character.id} key={character.id}>
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
          );
        })}
      </div>

      <Pagination pages={data.pages} currentPage={currentPage} />
    </>
  );
};

export default Home;
