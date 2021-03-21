import { applyMiddleware, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { createLogger } from "redux-logger";
import reducer from "../reducer/reducer";

// const logger = createLogger();

const store = createStore(
  reducer
  //   composeWithDevTools(applyMiddleware(logger))
);

export default store;
