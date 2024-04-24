import React, { useState } from "react";

export default ({ testMessages, setTestMessages, currentRepo }) => {
  const [inputText, setInputText] = useState("");
  const [time, setTime] = useState(30);
  function addMessage(e) {
    console.log("repo", currentRepo);
    // e.preventDefault();
    setTestMessages([
      ...testMessages,
      {
        from: "tenn501",
        content: inputText,
        timestamp: time.toString(),
        repo: currentRepo,
      },
    ]);
    setTime(time + 1);
    setInputText("");
    document.querySelector('textarea').value = ''
  }

  return (
    <div className="p-2">
      <div action="" className="flex">
        <textarea
          className="h-14 w-full resize-none rounded-lg bg-slate-600 p-1"
          type="submit"
          onKeyDown={(e) => {
            setInputText(e.target.value)
          }}
        />
        <button
          className="ml-3 rounded-lg bg-slate-500 px-4 py-1"
          onClick={(e) => addMessage(e)}
        >
          Send
        </button>
      </div>
    </div>
  );
};
