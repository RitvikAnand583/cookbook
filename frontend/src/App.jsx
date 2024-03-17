// import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AppLayout from "./ui/AppLayout";
import Explore from "./pages/Explore";
import Notification from "./pages/Notification";
import Stats from "./pages/Stats";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";
import CreatePost from "./pages/CreatePost";
import Profile from "./ui/Profile";
import Appearance from "./ui/Appearance";
import Security from "./ui/Security";
import Notifications from "./ui/Notifications";
import Favorites from "./ui/Favorites";
import Followers from "./ui/Followers";

function App() {
  // console.log(x);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="feed" />} />
          <Route path="feed" element={<Feed />} />
          <Route path="explore" element={<Explore />} />
          <Route path="messages" element={<Messages />} />
          <Route path="notification" element={<Notification />} />
          <Route path="settings" element={<Settings />}>
            <Route index element={<Navigate replace to="profile" />} />
            <Route path="profile" element={<Profile />} />
            <Route path="security" element={<Security />} />
            <Route path="appearance" element={<Appearance />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="followers-following" element={<Followers />} />
          </Route>
          <Route path="stats" element={<Stats />} />
          <Route path="post" element={<CreatePost />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
