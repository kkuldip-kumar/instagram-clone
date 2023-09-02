import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "@/utils/token";
import { apiUrl } from "@/utils/endpoint";
// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    // Login User
    loginUser: builder.mutation({
      query: (data) => ({
        url: "login",
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: data,
      }),
    }),

    // Register User
    registerUser: builder.mutation({
      query: (newUser) => ({
        url: "signup",
        method: "POST",
        body: newUser,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["User"],
    }),

    // Get Current User
    currentUser: builder.query({
      query: () => ({
        url: "user",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${getToken()}`,
        },
      }),
    }),

    // Get All Users
    getAllUsers: builder.query({
      query: () => ({
        url: "users",
        headers: {
          "Content-type": "application/json; charset=utf-8",
          Authorization: `Bearer ${getToken()}`,
        },
      }),
      invalidatesTags: ["User"],
    }),

    // Get all Users Posts
    getAllPosts: builder.query({
      query: (userId) => ({
        url: `users/${userId}/posts`,
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${getToken()}`,
        },
      }),
      providesTags: ["UserPost"],
    }),
    // Follow un Follow a user
    followUnFollow: builder.mutation({
      query: (id) => ({
        url: `users/follow/${id}`,
        method: "Get",
        headers: {
          "Content-type": "application/json; charset=utf-8",
          Authorization: `Bearer ${getToken()}`,
        },
      }),
      invalidatesTags: ["User"],
    }),

    // Update profile image
    updateProfileImage: builder.mutation({
      query: (data) => ({
        method: "PATCH",
        url: "/user/edit/profile/image",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${getToken()}`,
        },
        body: data,
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useCurrentUserQuery,
  useGetAllUsersQuery,
  useGetAllPostsQuery,
  useFollowUnFollowMutation,
  useUpdateProfileImageMutation,
} = userApi;
