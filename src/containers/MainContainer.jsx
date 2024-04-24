import React, { useState } from "react";
import ChatContainer from "./chat/ChatContainer.jsx";
import AuthContainer from "./auth/AuthContainer.jsx";
import { Routes, Route } from "react-router-dom";

export default () => {
  const [currentUser, setCurrentUser] = useState(null);

  // get userID from cookies
  // send GET request to get the currentUser from the database by sending the user_id
  // set that currentUser in state for use later

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 text-slate-400">
      <Routes>
        <Route
          path="/"
          element={
            <AuthContainer
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        <Route
          path="/chat"
          element={
            <ChatContainer
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />
      </Routes>
    </div>
  );
};
