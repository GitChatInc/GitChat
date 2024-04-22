import React from "react";
import ChatSidebar from "./ChatSidebar.jsx";
import ChatMain from "./ChatMain.jsx";

export default () => {
  return (
    <div class="flex h-96 w-1/2 rounded-lg border p-1">
      <ChatSidebar />
      <ChatMain />
    </div>
  );
};
