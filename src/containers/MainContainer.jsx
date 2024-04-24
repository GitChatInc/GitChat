import React, { useState, useEffect } from "react";
import ChatContainer from "./chat/ChatContainer.jsx";
import AuthContainer from "./auth/AuthContainer.jsx";
import { Routes, Route } from "react-router-dom";

export default () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);

  // get userID from cookies
  // send GET request to get the currentUser from the database by sending the user_id
  // set that currentUser in state for use later
  useEffect(() => {
    // Function to get cookie by name
    const getCookie = (name) => {
      const cookies = `${document.cookie}`;
      console.log(cookies);
      const cookiesArr = cookies.split('; ');
      for (const cookie of cookiesArr) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
          return cookieValue;
        }
      }
      return null;
    };
    
    const currentUserCookie = getCookie('userId');
    if (currentUserCookie) {
      setCurrentUserId(currentUserCookie);
    };
    console.log(currentUserCookie);
  }, []); 

  useEffect(() => {
    if (currentUserId) {
      fetch(`/api/users/${currentUserId}`) // Assuming the endpoint follows the pattern '/{username}/repos'
        .then(response => response.json())
        .then(data => setCurrentUser(data))
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [currentUserId]);

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
              currentUserId={currentUserId}
            />
          }
        />
      </Routes>
    </div>
  );
};
