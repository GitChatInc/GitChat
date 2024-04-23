import React from "react";

export default (props) => {
  return (
    <div className="mx-3 mb-3 flex items-end">
      {/* First Inital of the Sender for Use in case of no picture available */}
      {/* <span className="mr-3 flex h-8 w-8 items-ce`nter justify-center rounded-lg bg-slate-600 text-xl">
        {props.from[0].toUpperCase()}
      </span> */}
      <img
        src={`https://github.com/${props.from}.png`}
        alt={`${props.from}'s GitHub profile picture`}
        className={`mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-600 ${props.seq ? "invisible" : "visible"} text-xl brightness-75`}
      />
      <div>
        {props.seq ? "" : props.from}
        <div className="w-fit max-w-xs rounded-lg bg-slate-900 p-2">
          {props.content}
        </div>
      </div>
    </div>
  );
};
