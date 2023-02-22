import React from "react";
import MyMessage from "./MyMessage";
import YouMessage from "./YouMessage";
export default function BoxChat({ messages }) {
  return (
    <div className="boxChat overflow-y-scroll flex flex-col-reverse">
      {!messages
        ? "Loading"
        : !messages.length < 1
        ? messages.map((item) => {
            if (item.userId === window.localStorage.getItem('isUser'))
              return <MyMessage key={item.id} text={item.content}></MyMessage>;
            else {
              return (
                <YouMessage key={item.id} text={item.content}></YouMessage>
              );
            }
          })
        : <p className="text-center text-xl mt-10">Chat now !</p>}
    </div>
  );
}
