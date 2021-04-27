import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper, Context } from "next-redux-wrapper";
import createSagaMiddleware, { Task } from "redux-saga";

import reducer from "./rootReducer";
import rootSaga from "./sagas";

export interface SagaStore extends Store {
  sagaTask?: Task;
}

export const makeStore = (context: Context) => {
  const sagaMiddleware = createSagaMiddleware();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const actionTransform = () => (next) => (action) => {
    const act = action.toJSON ? action.toJSON() : action;
    return next(act);
  };

  const middleware = [sagaMiddleware, actionTransform];

  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore);
