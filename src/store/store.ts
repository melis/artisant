import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import products from "./products/productsReduser";

const rootReducer = combineReducers({ products });
export type RootState = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
