import React from "react";

export default () => {
  return (
    <div className="flex h-96 w-1/3 flex-col items-center justify-center rounded-2xl bg-slate-800">
      <h1 className="text-3xl">GitChat</h1>
      <div><a href="/oauth">Log In with GitHub</a></div>
    </div>
  );
};
