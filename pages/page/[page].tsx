import { GetServerSideProps } from "next";
import characterRequest from "../../src/api/characterRequests";
import Home from "../../src/features/Home/components/Home";

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const res = await characterRequest.GetCharactersByPage(
      "" + context.query.page
    );

    const characters = res?.data.results;
    const pages = res?.data.info.pages;
    const data = {
      characters,
      pages,
    };

    if (!res) {
      return {
        notFound: true,
      };
    }

    const curr =
      typeof context.query.page === "string" ? +context.query.page : 1;

    return {
      props: { data, currentPage: curr   },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

export default Home;
