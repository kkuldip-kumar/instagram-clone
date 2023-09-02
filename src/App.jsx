import { lazy, useState, Suspense } from "react";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import { Routes, Route } from "react-router-dom";

import PrivateRoute from "@/router/PrivateRoute";
import AuthRoute from "@/router/AuthRoute";
import { Loader } from "@/components/loaders/Loader";
// import TimelineLayout from "./layouts/TimelineLayout";
// import ChatsLayout from "./layouts/ChatsLayout";
// import ProfileLayout from "./layouts/ProfileLayout";
const SignIn = lazy(() => import("@/features/auth/SignIn"));
const SignUp = lazy(() => import("@/features/auth/SignUp"));
const FeedLayout = lazy(() => import("./layouts/FeedLayout"));
const ChatsLayout = lazy(() => import("./layouts/ChatsLayout"));
const ProfileLayout = lazy(() => import("./layouts/ProfileLayout"));
function App() {
  const [sideBarStatus, setsideBarStatus] = useState(false);
  const updateSidebar = () => {
    setsideBarStatus((val) => (val = !val));
  };
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<MainLayout />}>
            <Route
              path=""
              element={
                <Suspense fallback={<Loader />}>
                  <FeedLayout />
                </Suspense>
              }
            />
            <Route
              path="chat"
              element={
                <Suspense fallback={<Loader />}>
                  <ChatsLayout />
                </Suspense>
              }
            />
            <Route
              path="profile"
              element={
                <Suspense fallback={<Loader />}>
                  <ProfileLayout />
                </Suspense>
              }
            />
          </Route>
        </Route>
        <Route element={<AuthRoute />}>
          <Route
            path="/login"
            element={
              <Suspense fallback={<Loader />}>
                <SignIn />
              </Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <Suspense fallback={<Loader />}>
                <SignUp />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
