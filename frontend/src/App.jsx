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
          <Route path="settings" element={<Settings />} />
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
