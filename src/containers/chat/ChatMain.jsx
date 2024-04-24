import React, {useState} from "react";
import ChatMessageLog from "./ChatMessageLog.jsx";
import ChatInput from "./ChatInput.jsx";

export default (props) => {

  const [testMessages, setTestMessages] = useState([
    { from: "emmagawd", content: "bro", timestamp: "10", repo: "gitchat" },
    {
      from: "tenn501",
      content:
        "React will create a root for the domNode, and take over managing the DOM inside it. After you’ve created a root, you need to call root.render to display a React component inside of it:",
      timestamp: "9",
      repo: "gitchat",
    },
    {
      from: "CK-Zhao",
      content: "me too!",
      timestamp: "7",
      repo: "gitchat",
    },
    {
      from: "tenn501",
      content: "jiggly wiggly",
      timestamp: "8",
      repo: "gitchat",
    },
    {
      from: "trialnerr",
      content: "I <3 my wife",
      timestamp: "6",
      repo: "gitchat",
    },
    {
      from: "marsbird",
      content: "birds r cool",
      timestamp: "4",
      repo: "gitchat",
    },
    { from: "tenn501", content: "buzz", timestamp: "1", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "2", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "3", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "4", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "5", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "6", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "7", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "8", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "9", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "10", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "11", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "12", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "13", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "14", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "15", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "16", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "17", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "18", repo: "solibee" },
  ]);


  return (
    <div className="flex w-2/3 flex-col justify-end rounded-r-2xl bg-slate-700">
      <ChatMessageLog currentRepo={props.currentRepo} testMessages={testMessages} setTestMessages={setTestMessages}/>
      <ChatInput currentRepo={props.currentRepo} testMessages={testMessages} setTestMessages={setTestMessages}/>
    </div>
  );
};
