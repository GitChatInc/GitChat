import React from "react";
import Message from "../../components/Message.jsx";

export default (props) => {
  let testMessages = [
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
  ];

  //fetch messages for user from the db
  // const [messages, setMessages] = useState([]); 
  // useEffect(() => {
  //   if (currentUserId) {
  //     fetch(`/api/repos/${currentUserId}`)
  //       .then(response => response.json())
  //       .then((data) => {console.log(data)})
  //       .then(data => setReposList(data))
  //       .catch(error => console.error('Error fetching data:', error));
  //   }
  // }, [currentUserId]); 




  // messages need to be filtered, sorted, flagged for sequential senders and then sorted in reverse before converted to components
  let prevMessageSender;

  testMessages = testMessages.filter((message) => {
    return message.repo == props.currentRepo;
  });

  testMessages.sort((a, b) => a.timestamp - b.timestamp);

  testMessages.forEach((message) => {
    message.from == prevMessageSender
      ? (message.seq = true)
      : (message.seq = false);
    prevMessageSender = message.from;
  });

  testMessages.sort((a, b) => b.timestamp - a.timestamp);

  const messages = [];
  testMessages.forEach((e, i) => {
    messages.push(
      <Message key={i} from={e.from} content={e.content} seq={e.seq} />,
    );
  });

  return (
    <div className="flex flex-col-reverse overflow-y-hidden hover:overflow-y-auto">
      {messages}
    </div>
  );
};
