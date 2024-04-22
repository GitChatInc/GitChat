import React from "react";

export default (props) => {
  return (
    <div class="my-1 rounded-lg border p-1">
      {props.from} {props.content}
    </div>
  );
};
