import React from "react";
import Message from "../../components/Message.jsx";

export default (props) => {
  const testMessages = [
    {
      from: "marsbird",
      content: "birds r cool",
      timestamp: "x",
      repo: "gitchat",
    },
    {
      from: "trialnerr",
      content: "I <3 my wife",
      timestamp: "x",
      repo: "gitchat",
    },
    {
      from: "CK-Zhao",
      content: "me too!",
      timestamp: "x",
      repo: "gitchat",
    },
    {
      from: "tenn501",
      content: "jiggly wiggly",
      timestamp: "x",
      repo: "gitchat",
    },
    {
      from: "tenn501",
      content:
        "React will create a root for the domNode, and take over managing the DOM inside it. After you’ve created a root, you need to call root.render to display a React component inside of it:",
      timestamp: "x",
      repo: "gitchat",
    },
    { from: "emmagawd", content: "bro", timestamp: "x", repo: "gitchat" },
    { from: "tenn501", content: "buzz", timestamp: "x", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "x", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "x", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "x", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "x", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "x", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "x", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "x", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "x", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "x", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "x", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "x", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "x", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "x", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "x", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "x", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "x", repo: "solibee" },
    { from: "tenn501", content: "buzz", timestamp: "x", repo: "solibee" },
  ];
  let messages = [];
  testMessages.forEach((e, i) => {
    if (e.repo == props.currentRepo) {
      messages.push(<Message key={i} from={e.from} content={e.content} />);
    }
  });

  return (
    <div className="overflow-y-hidden hover:overflow-y-auto">{messages}</div>
  );
};
