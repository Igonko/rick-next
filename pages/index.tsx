import Home from "../src/features/Home/components/Home";
import { GetServerSideProps } from "next";
import characterRequest from "../src/api/characterRequests";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await characterRequest.GetCharacters();
  const characters = res?.data.results;
  const pages = res?.data.info.pages;

  const data = {
    characters,
    pages,
  };

  return {
    props: { data },
  };
};

export default Home;
