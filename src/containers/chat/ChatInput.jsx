import React from "react";

export default () => {
  return (
    <div className="p-2">
      <form action="" className="flex">
        <textarea
          className="h-fit w-full resize-none rounded-lg bg-slate-600 p-1"
          type="submit"
        />
        <button className="ml-3 rounded-lg bg-slate-500 px-4 py-1">Send</button>
      </form>
    </div>
  );
};
