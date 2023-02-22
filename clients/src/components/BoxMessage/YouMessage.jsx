import React from "react";

export default function YouMessage(props) {
  return (
    <div className="max-w-xs m-2 text-left">
      <div className="bg-slate-200 w-min rounded-xl">
        <p className="py-1 m-2 p-2">{props.text}</p>
      </div>
    </div>
  );
}
