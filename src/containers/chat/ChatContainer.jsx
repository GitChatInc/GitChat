import React, { useState } from "react";
import ChatSidebar from "./ChatSidebar.jsx";
import ChatMain from "./ChatMain.jsx";

export default () => {
  const [currentRepo,setCurrentRepo] = useState('hello')

  return (
    <div className="flex h-[700px] w-1/2 rounded-2xl bg-slate-800">
      <ChatSidebar setCurrentRepo={setCurrentRepo} currentRepo={currentRepo}/>
      <ChatMain currentRepo={currentRepo}/>
    </div>
  );
};
