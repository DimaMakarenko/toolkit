import { TTask } from "./index";
import { nanoid, createAction } from "@reduxjs/toolkit";

/*
export const addTask = createAction("syncList/add", ({ title, project }) => {
  return {
    payload: {
      id: nanoid(),
      title,
      project,
      date: new Date().toISOString(),
    },
  };
});
*/

export const addTask = createAction("syncList/add");
