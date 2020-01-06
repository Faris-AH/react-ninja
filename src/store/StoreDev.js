import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import RootReducer from "./RootReducer";
import createDevTools from "../utils/StoreDevtools";

const StoreDev = preloadedState => {
  const store = createStore(
    ()=>{
      return {}
    },
    preloadedState,
    compose(applyMiddleware(thunk), createDevTools.instrument())
  );

  return store;
};

export default StoreDev;
