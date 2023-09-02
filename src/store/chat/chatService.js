import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "@/utils/token";
import { apiUrl } from "@/utils/endpoint";
export const chatApi = createApi({
  reducerPath: "chatApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
  }),
  tagTypes: ["Message", "Chat"],
  endpoints: (builder) => ({
    accessChat: builder.mutation({
      query: (id) => ({
        url: "chats",
        method: "POST",
        body: { userId: id },
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${getToken()}`,
        },
      }),
      providesTags: ["Chat"],
    }),
    getMessages: builder.query({
      query: (chatId) => ({
        url: `messages/${chatId}`,
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${getToken()}`,
        },
      }),
      invalidatesTags: ["Message"],
    }),
    sendMessage: builder.mutation({
      query: (payload) => ({
        url: `messages`,
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${getToken()}`,
        },
      }),
      providesTags: ["Message"],
    }),
  }),
});

export const {
  useAccessChatMutation,
  useGetMessagesQuery,
  useSendMessageMutation,
} = chatApi;
