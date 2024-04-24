import React from "react";
import ChatContainer from "./chat/ChatContainer.jsx";
import AuthContainer from "./auth/AuthContainer.jsx";
import { Routes, Route } from "react-router-dom";

export default () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 text-slate-400">
      <Routes>
        <Route path="/" element={<AuthContainer />} />
        <Route path="/chat" element={<ChatContainer />} />
      </Routes>
    </div>
  );
};
