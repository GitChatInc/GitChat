import React from "react";
import Message from "../../components/Message.jsx";

export default (props) => {
 
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

  let testMessages = props.testMessages.filter((message) => {
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
      <Message key={i} from={e.from} content={e.content} seq={e.seq} currentRepo={props.currentRepo}/>,
    );
  });

  return (
    <div className="flex flex-col-reverse overflow-y-hidden hover:overflow-y-auto">
      {messages}
    </div>
  );
};
