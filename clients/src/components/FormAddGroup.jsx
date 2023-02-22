import React, { useContext, useState } from "react";
import axios from "axios";
import { v4 } from "uuid";
import { Context } from "../global/Context";
export default function FormAddGroup() {
  const context = useContext(Context);
  const [name, setName] = useState("");
  const submitRoom = async (data) => {
    await axios.post("http://127.0.0.1:8000/api/room", data).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  const submitRooms = async (data) => {
    await axios.post("http://127.0.0.1:8000/api/rooms", data).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let roomId = v4();
    let data1 = {
      roomId: roomId,
      nameRoom: name,
    };
    let data2 = {
      userId: window.localStorage.getItem("isUser"),
      roomId: roomId,
    };
    await submitRoom(data1);
    await submitRooms(data2);
    context.setForm(false);
    axios
      .get(
        "http://127.0.0.1:8000/api/rooms/userId/" +
          window.localStorage.getItem("isUser")
      )
      .then((res) => context.setListRoomData(res.data));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-1/4 fixed left-1/4 bg-slate-200 transition-all bottom-20 z-50 shadow h-56"
    >
      <div className="flex items-center border-b border-sky-500 py-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Name Group..."
          aria-label="Full name"
        />
        <button
          onClick={handleSubmit}
          className="flex-shrink-0 bg-sky-500 hover:bg-sky-700 border-sky-500 hover:border-sky-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
        >
          Add
        </button>
        <button
          onClick={() => {
            context.setForm(false);
          }}
          className="flex-shrink-0 border-transparent border-4 text-sky-500 hover:text-sky-800 text-sm py-1 px-2 rounded"
          type="button"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
