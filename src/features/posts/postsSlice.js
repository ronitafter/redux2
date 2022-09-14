import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "redux toolkit tutorial", content: "redux toolkit basics" },
  { id: "2", title: "mern stack tutorial", content: "mern stack basics" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
