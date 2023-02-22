import React from "react";
export default function MyMessage({text}) {
  return (
    <div className="myMessage">
      <div className="max-w-xs m-2">
        <div className="bg-sky-400 text-white w-fit rounded-xl text-left">
          <p className="py-1 m-2 p-2">{text}</p>
        </div>
      </div>
    </div>
  );
}
