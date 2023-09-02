import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import commonReducer from "./commonSlice";
import userReducer from "./user/userSlice";
import chatReducer from "./chat/chatSlice";
import postReducer from "./post/postSlice";
import { userApi } from "./user/userService";
import { chatApi } from "./chat/chatService";
import { postApi } from "./post/postService";
import { useDispatch } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
const persistConfig = {
  key: "user",
  version: 1,
  storage,
};
// const reducers = combineReducers({ counter: counterSlice });
// const rootReducer = persistReducer(userReducer);
const persistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    user: persistedReducer,
    chat: chatReducer,
    post: postReducer,
    common: commonReducer,
    [userApi.reducerPath]: userApi.reducer,
    [chatApi.reducerPath]: chatApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(userApi.middleware),
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(userApi.middleware)
      .concat(postApi.middleware)
      .concat(chatApi.middleware),
});
setupListeners(store.dispatch);
// {
//   serializableCheck: {
//     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//   },
// }
export let persistor = persistStore(store);
export default store;
