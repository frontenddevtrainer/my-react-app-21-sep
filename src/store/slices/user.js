import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  initialState: {
    name: "praveen",
  },
  name: "user",
  reducers: {},
});

const { actions, reducer } = UserSlice;
const {} = actions;
export {
    reducer
};
