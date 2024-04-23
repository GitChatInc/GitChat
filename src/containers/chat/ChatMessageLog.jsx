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
      from: "tenn501",
      content: "jiggly wiggly",
      timestamp: "x",
      repo: "gitchat",
    },
    { from: "emmagawd", content: "bro", timestamp: "x", repo: "gitchat" },
    // { from: "marsbird", content: "birds r cool", timestamp: "x", repo:'gitchat' },
    // { from: "tenn501", content: "jiggly wiggly", timestamp: "x", repo:'gitchat' },
    // { from: "emmagawd", content: "bro", timestamp: "x", repo:'gitchat' },
    // { from: "marsbird", content: "birds r cool", timestamp: "x", repo:'gitchat' },
    // { from: "tenn501", content: "jiggly wiggly", timestamp: "x", repo:'gitchat' },
    // { from: "emmagawd", content: "bro", timestamp: "x", repo:'gitchat' },
    // { from: "marsbird", content: "birds r cool", timestamp: "x", repo:'gitchat' },
    // { from: "tenn501", content: "jiggly wiggly", timestamp: "x", repo:'gitchat' },
    // { from: "emmagawd", content: "bro", timestamp: "x", repo:'gitchat' },
    // { from: "marsbird", content: "birds r cool", timestamp: "x", repo:'gitchat' },
    // { from: "tenn501", content: "jiggly wiggly", timestamp: "x", repo:'gitchat' },
    // { from: "emmagawd", content: "bro", timestamp: "x", repo:'gitchat' },
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
