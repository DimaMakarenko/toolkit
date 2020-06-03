import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: "",
};

const userSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
});

const { reducer } = userSlice;

export default reducer;
