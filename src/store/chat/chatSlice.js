import { createSlice } from "@reduxjs/toolkit";
import { chatApi } from "./chatService";

const initialState = {
  currentChatUser: {},
  messages: [],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessages: (state, action) => {
      state.messages = [...state.messages, action.payload];
    },
  },
  extraReducers(builder) {
    // set chat data
    builder.addMatcher(
      chatApi.endpoints.accessChat.matchFulfilled,
      (state, { payload }) => {
        state.currentChatUser = { ...payload.data };
      }
    );

    // set Messages
    builder.addMatcher(
      chatApi.endpoints.getMessages.matchFulfilled,
      (state, { payload }) => {
        state.messages = [...payload.data];
      }
    );
  },
});

export const { addMessages } = chatSlice.actions;
export default chatSlice.reducer;
