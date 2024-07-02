import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: ()=> [logger],
});
export default store;
