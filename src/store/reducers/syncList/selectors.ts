import { RootState } from "../../rootReducer";
import { TTask } from "./index";

export const syncList = (state: RootState): TTask[] => state.sync.list;
