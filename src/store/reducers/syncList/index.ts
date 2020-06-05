import { createSlice, nanoid } from "@reduxjs/toolkit";
//
export type TTask = {
  id: string;
  title: string;
  project: string;
  date: Date;
  count: number;
};

type TSync = {
  list: TTask[];
};

const initialState: TSync = {
  list: [],
};

const userSlice = createSlice({
  name: "syncList",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.list.push({
        id: nanoid(),
        title: payload.title,
        project: payload.project,
        date: new Date(),
        count: 0,
      });
    },
  },
});

const { reducer, actions } = userSlice;

export const { addTask } = actions;

export default reducer;
