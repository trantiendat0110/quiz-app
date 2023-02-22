import Navigation from "./Navigation";
import InputMessage from "./InputMessage";
import BoxChat from "./BoxChat";
import { useEffect, useState } from "react";
import axios from "axios";
export default function BoxMessage() {
  const [messages, setMessages] = useState({})
  const [room, setRoom] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/room/roomId/' + window.localStorage.getItem('currentRoom'))
    .then((res) => setRoom(Object.values(res.data)[0]))
  }, [window.localStorage.getItem('currentRoom')])
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/message/roomId/' + window.localStorage.getItem('currentRoom'))
    .then((res) => setMessages(res.data))
  }, [window.localStorage.getItem('currentRoom')])
  return (
    <div className="mainMessage relative w-3/4 flex flex-col justify-between">
      {window.localStorage.getItem("currentRoom") == null ? (
        <p className="m-auto mt-10 font-medium text-xl">Select Chat !</p>
      ) : (
        <div className="boxMessage bg-slate-100">
          <Navigation room={room}></Navigation>
          <BoxChat messages={Object.values(messages)}></BoxChat>
          <InputMessage setMessages={setMessages}></InputMessage>
        </div>
      )}
    </div>
  );
}
