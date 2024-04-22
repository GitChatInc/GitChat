import React from 'react';

export default (props) => {
  return (
    <div class='border rounded-lg p-1 my-1'>
      {props.from} {props.content}
    </div>
  );
};
