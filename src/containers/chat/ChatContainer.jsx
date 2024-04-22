import React from 'react';
import ChatSidebar from './ChatSidebar.jsx';
import ChatMain from './ChatMain.jsx';

export default () => {
  return (
    <div class='border w-1/2 h-96 flex rounded-lg p-1'>
      <ChatSidebar />
      <ChatMain />
    </div>
  );
};
