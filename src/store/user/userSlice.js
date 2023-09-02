import { createSlice, current } from "@reduxjs/toolkit";
import { getToken, removeToken, setToken } from "@/utils/token";
import { userApi } from "./userService";
const EmptyUser = {
  userId: "",
  name: "",
  email: "",
  image: "",
};
const initialState = {
  data: {
    ...EmptyUser,
  },
  isLoggedIn: getToken() ? true : false,
  allUsers: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      removeToken();
      state.data = EmptyUser;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    // Save user after login
    builder.addMatcher(
      userApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        setToken(payload?.token);
        state.data = { ...payload.data };
        state.isLoggedIn = true;
      }
    );

    // save current loggedin user
    builder.addMatcher(
      userApi.endpoints.currentUser.matchFulfilled,
      (state, { payload }) => {
        state.data = { ...payload };
      }
    );

    // Save all users
    builder.addMatcher(
      userApi.endpoints.getAllUsers.matchFulfilled,
      (state, { payload }) => {
        state.allUsers = [...payload.data];
      }
    );

    // save updated profile image
    builder.addMatcher(
      userApi.endpoints.updateProfileImage.matchFulfilled,
      (state, { payload }) => {
        console.log(current(state));
        const newData = { ...state.data, image: payload.data.image };
        return { ...state, data: newData };
        console.log(current(state));
      }
    );
  },
});

// Action creators are generated for each case reducer function
export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;
