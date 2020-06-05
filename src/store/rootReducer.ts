import { combineReducers } from "redux";
import sync from "./reducers/syncList";

export const rootReducer = combineReducers({ sync });

export type RootState = ReturnType<typeof rootReducer>;
