import axios from "axios";
import React, { useState } from "react";

export default function InputMessage({ setMessages }) {
  const [chatText, setChatText] = useState("");
  const handleChat = async (e) => {
    const data = {
      content: chatText,
      roomId: window.localStorage.getItem("currentRoom"),
      userId: window.localStorage.getItem("isUser"),
    };
    if (e.key == "Enter") {
      setChatText("");
      await axios
        .post("http://127.0.0.1:8000/api/message", data)
        .then(async () => {
          await axios
            .get(
              "http://127.0.0.1:8000/api/message/roomId/" +
                window.localStorage.getItem("currentRoom")
            )
            .then((res) => setMessages(res.data));
        });
    }
  };
  return (
    <div className="flex justify-center">
      <div className="flex justify-around w-9/12 bottom-4 pt-2 border-0 bg-white absolute rounded ">
        <div className="flex">
          <p className="hover:cursor-pointer bg-slate-200 rounded m-auto mx-1">
            <i className="text-sky-600 fa-solid fa-plus  p-2 px-4"></i>
          </p>
          <p className="hover:cursor-pointer bg-slate-200 rounded m-auto mx-1">
            <i className="text-sky-600 fa-solid fa-face-smile  p-2 px-4"></i>
          </p>
        </div>
        <input
          value={chatText}
          onKeyDown={(e) => {
            handleChat(e);
          }}
          onChange={(e) => setChatText(e.target.value)}
          type="text"
          placeholder="Aa"
          className="rounded outline-none bg-white border-2 px-2 py-2 mb-2 w-2/3 mx-10"
        />
        <div>
          <p className="hover:cursor-pointer bg-slate-200 rounded">
            {chatText ? (
              <i className="fa-solid fa-forward text-sky-600 text-xl m-auto p-2 px-4"></i>
            ) : (
              <i className="text-red-600 text-xl fa-solid fa-heart m-auto p-2 px-4"></i>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
