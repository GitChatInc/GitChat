import React from "react";

export default (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.setCurrentRepo(props.name);
  };

  return (
    <div
      className={`mx-3 cursor-pointer mt-3 flex items-center rounded-lg bg-slate-600 p-1 ${props.currentRepo == props.name ? "border border-slate-500" : ""}`}
      onClick={(e) => handleClick(e)}
    >
      <span className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-slate-500 text-xl">
        {props.name[0].toUpperCase()}
      </span>
      {props.name}
    </div>
  );
};
