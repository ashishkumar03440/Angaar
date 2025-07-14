import React from "react";

function Message() {
  let name = "Ashish";
  if (name)
    return <h1>Hello {name}</h1>;
  return <h1>Hello world</h1>;
}

export default Message;
