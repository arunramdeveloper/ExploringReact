import React from "react";

export default function PropString(props) {
    const {msg} = props;
    console.log(props)
  return (
    <div>
      <h1> props received as string</h1>
      <p>{msg}</p>
    </div>
  );
}
