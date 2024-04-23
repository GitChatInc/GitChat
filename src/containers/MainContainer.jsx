import React from "react";
import ChatContainer from "./chat/ChatContainer.jsx";
import LogInContainer from "./auth/AuthContainer.jsx";

export default () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 text-slate-400">
      {/* <ChatContainer /> */}
      <LogInContainer />
    </div>
  );
};
