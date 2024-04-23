import React from "react";

export default () => {
  return (
    <div className="p-2">
      <form action="" className="flex">
        <input
          type="text"
          className="w-full rounded-lg bg-slate-600 p-1"
        />
        <button className="ml-3 rounded-lg bg-slate-500 py-1 px-4">Send</button>
      </form>
    </div>
  );
};
