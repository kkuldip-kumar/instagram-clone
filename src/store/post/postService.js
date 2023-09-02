// Need to use the React-specific entry point to import createApi
import { apiUrl } from "@/utils/endpoint";
import { getToken } from "@/utils/token";
import { sub } from "date-fns";
import { createEntityAdapter } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.updatedAt.localeCompare(a.updatedAt),
});
// Define a service using a base URL and expected endpoints
export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    posts: builder.query({
      query: () => ({
        url: `posts`,
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${getToken()}`,
        },
      }),
      providesTags: ["Post"],
    }),
    post: builder.query({
      query: (id) => ({
        url: `posts/${id}`,
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${getToken()}`,
        },
      }),
      providesTags: ["Post"],
    }),
    addPost: builder.mutation({
      query: (post) => ({
        url: "posts",
        method: "POST",
        headers: {
          // "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${getToken()}`,
        },
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),
    updatePost: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `posts/${id}`,
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${getToken()}`,
        },
        body: rest,
      }),
      invalidatesTags: ["Post"],
    }),
    removePost: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${getToken()}`,
        },
      }),
      invalidatesTags: ["Post"],
    }),
    likePost: builder.mutation({
      query: (id) => ({
        url: `posts/likeUnlike/${id}`,
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${getToken()}`,
        },
      }),
      invalidatesTags: ["Post"],
    }),
    likeComment: builder.mutation({
      query: (id) => ({
        url: `comment/likeUnlike/${id}`,
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${getToken()}`,
        },
      }),
      invalidatesTags: ["Post"],
    }),
    likeReply: builder.mutation({
      query: (id) => ({
        url: `reply/likeUnlike/${id}`,
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${getToken()}`,
        },
      }),
      invalidatesTags: ["Post"],
    }),
    savePost: builder.mutation({
      query: (id) => ({
        url: `posts/saveUnSave/${id}`,
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${getToken()}`,
        },
      }),
      invalidatesTags: ["Post"],
    }),
    commentOnPost: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `posts/comment/${id}`,
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${getToken()}`,
        },
        body: rest,
      }),
      invalidatesTags: ["Post"],
    }),
    replyComment: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `reply/${id}`,
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${getToken()}`,
        },
        body: rest,
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  usePostsQuery,
  usePostQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useRemovePostMutation,
  useLikePostMutation,
  useLikeCommentMutation,
  useLikeReplyMutation,
  useCommentOnPostMutation,
  useReplyCommentMutation,
  useSavePostMutation,
} = postApi;
