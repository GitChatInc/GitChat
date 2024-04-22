import React from 'react';
import ChatMessageLog from './ChatMessageLog.jsx';
import ChatInput from './ChatInput.jsx'

export default () => {
  return (
    <div class='border w-2/3  rounded-lg p-1'>
      <ChatMessageLog/>
      <ChatInput/>
    </div>
  );
};
