import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers/index";

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension
      ? window.devToolsExtension()
      : function (f) {
          return f;
        }
  )
);

export default store;
