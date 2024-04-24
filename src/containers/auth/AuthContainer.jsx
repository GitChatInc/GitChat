import React from "react";
import chatIcon from '../../../public/chat.png'

export default () => {
  return (
    <div className="flex w-full flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4">GitChat!</h1>
      <div className="flex w-2/3 sm:w-1/2 md:w-1/3 lg:w-96 py-12 flex-col items-center justify-center rounded-2xl bg-slate-800">
        <img src={chatIcon} alt="" className="h-12 mb-5"/>
        <div className="rounded-lg px-5 py-2 bg-slate-700 hover:bg-slate-900 hover:shadow-lg font-bold">
          <a href="/api/auth">Log In with GitHub</a>
        </div>
      </div>
    </div>
  );
};
