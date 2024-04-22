import React from 'react';
import Message from '../../components/Message.jsx';

export default () => {
  const testMessages = [
    { from: 'marsbird', content: 'birds r cool', timestamp: 'x' },
    { from: 'tenn501', content: 'jiggly wiggly', timestamp: 'x' },
    { from: 'emmagawd', content: 'bro', timestamp: 'x' },
  ];
  let messages = [];
  testMessages.forEach((e, i) => {
    messages.push(<Message key={i} from={e.from} content={e.content} />);
  });

  return <div class='border h-2/3  rounded-lg p-1'>{messages}</div>;
};
