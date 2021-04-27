import { END } from "redux-saga";
import { AppContext } from "next/app";
import { SagaStore, wrapper } from "../src/store/store";

import "../src/styles/globals.scss";

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  const pageProps = {
    ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
  };

  if (ctx.req) {
    ctx.store.dispatch(END);
    await (ctx.store as SagaStore).sagaTask.toPromise();
  }

  return {
    pageProps,
  };
};

export default wrapper.withRedux(MyApp);
