import React, { useState, useEffect } from "react";
import ChatSidebar from "./ChatSidebar.jsx";
import ChatMain from "./ChatMain.jsx";

export default ({ currentUserId, currentUser, setCurrentUser}) => {
  const [currentRepo, setCurrentRepo] = useState(null);

  return (
    <div className="flex h-[700px] w-1/2 rounded-2xl bg-slate-800">
      <ChatSidebar currentUser={currentUser} currentUserId={currentUserId} setCurrentRepo={setCurrentRepo} currentRepo={currentRepo} />
      <ChatMain currentUser={currentUser} currentRepo={currentRepo} />
    </div>
  );
};
