import React from "react";

export default (props) => {
  return (
    <div className="mx-3 mb-3 flex items-end">
      <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-500 text-xl">
        {props.from[0].toUpperCase()}
      </span>
      <div>
        {props.from}
        <div className="w-fit max-w-xs rounded-lg bg-slate-500 p-2">
          {props.content}
        </div>
      </div>
    </div>
  );
};
