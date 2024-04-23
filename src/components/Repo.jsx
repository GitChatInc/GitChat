import React from "react";

export default (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.setCurrentRepo(props.name);
  };

  return (
    <div
      className={`mx-3 mt-3 flex cursor-pointer items-center rounded-lg p-3 text-lg ${props.currentRepo == props.name ? "bg-slate-900 shadow shadow-black" : "bg-slate-600"}`}
      onClick={(e) => handleClick(e)}
    >
      <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-500 text-xl">
        {props.name[0].toUpperCase()}
      </span>
      {props.name}
    </div>
  );
};
