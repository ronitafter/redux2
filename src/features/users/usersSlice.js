import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Aa" },
  { id: "1", name: "Bb" },
  { id: "2", name: "Cc" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
