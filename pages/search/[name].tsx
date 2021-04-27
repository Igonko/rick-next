import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import characterRequest from "../../src/api/characterRequests";
import Search from "../../src/features/Search/Search";
import styles from "../../src/features/Home/Home.module.scss";
import { character } from "../../src/features/Home/components/Home";

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const res = await characterRequest.GetCharactersByName(
      "" + context.query.name
    );
    const characters = res?.data.results;

    if (!res) {
      return {
        notFound: true,
      };
    }

    return {
      props: { characters },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

const SearchPage = ({ characters }) => {
  return (
    <>
      <Head>
        <title>Search items</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Search />

      <Link href="/">
        <a className={styles.character_link_back}>Back to all characters</a>
      </Link>

      <div className={styles.container}>
        {characters.map((character: character) => {
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
    </>
  );
};

export default SearchPage;
