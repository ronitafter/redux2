import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "redux toolkit tutorial", content: "redux toolkit basics" },
  { id: "2", title: "mern stack tutorial", content: "mern stack basics" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer;
