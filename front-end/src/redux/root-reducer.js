import { combineReducers } from "redux";

import cartReducer from "./cart/slice";

const rootReducer = combineReducers({ cartReducer });
export default rootReducer;
