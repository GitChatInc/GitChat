import React from "react";
import ChatMessageLog from "./ChatMessageLog.jsx";
import ChatInput from "./ChatInput.jsx";

export default (props) => {
  return (
    <div className="flex w-2/3 flex-col justify-end rounded-r-2xl bg-slate-700">
      <ChatMessageLog currentRepo={props.currentRepo}/>
      <ChatInput currentRepo={props.currentRepo}/>
    </div>
  );
};
