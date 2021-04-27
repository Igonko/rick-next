import { GetStaticProps, GetStaticPaths } from "next";
import characterRequest from "../src/api/characterRequests";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import styles from "../src/styles/Id.module.scss";

// import { character } from "../src/features/Home/Home";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await characterRequest.GetCharacters();
  // const characters = res?.data.results;
  const totalCharacters = res?.data.info.count;

  const pathsParams = [];

  for (let i = 1; i < totalCharacters; i++) {
    pathsParams.push({
      params: { id: "" + i },
    });
  }

  return {
    paths: pathsParams,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await characterRequest.GetCharactersById(+context.params.id);
  const character = res?.data;

  return {
    props: { character },
  };
};

const Character = ({ character }) => {
  return !character ? null : (
    <>
      <Head>
        <title>{character.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.character_block}>
        <Image
          src={character.image}
          alt={character.name}
          width={300}
          height={300}
        />
        <div className={styles.character_info}>
          <p>Name: {character.name}</p>
          <p>Gender: {character.gender}</p>
          <p>Location: {character.location.name}</p>
          <p>Origin: {character.origin.name}</p>
        </div>
      </div>
      <Link href="/">
        <a className={styles.character_link_back}>Back to all characters</a>
      </Link>
    </>
  );
};

export default Character;
