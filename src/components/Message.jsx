import React from "react";

export default (props) => {
  return (
    <div className="my-1 p-1">
      {props.from}
      <div className="w-fit rounded-lg bg-slate-500">{props.content}</div>
    </div>
  );
};
