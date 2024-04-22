import React from 'react';
import ChatSideBar from './ChatSideBar.jsx';
import ChatContainer from './ChatContainer.jsx';

export default () => {
  return (
    <main class='border'>
      <ChatSideBar />
      <ChatContainer />
    </main>
  );
};
