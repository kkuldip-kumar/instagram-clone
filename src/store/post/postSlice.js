import { createSlice } from "@reduxjs/toolkit";
import { postApi } from "./postService";
const initialState = {
  posts: [],
  post: {},
};
export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = [...state.posts, ...action.payload];
    },
  },
  extraReducers(builder) {
    builder.addMatcher(
      postApi.endpoints.addPost.matchFulfilled,
      (state, { payload }) => {
        state.posts = [...state.posts, ...payload];
      }
    );
    builder.addMatcher(
      postApi.endpoints.posts.matchFulfilled,
      (state, { payload }) => {
        state.posts = [...payload.data];
      }
    );
    builder.addMatcher(
      postApi.endpoints.post.matchFulfilled,
      (state, { payload }) => {
        state.post = { ...payload.data };
      }
    );
  },
});

export const { setPosts } = postSlice.actions;

export default postSlice.reducer;
