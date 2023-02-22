import React, { useContext } from "react";
import { Context } from "../../global/Context";
import ListRoom from "./ListRoom";
import Search from "./Search";

export default function ListChat() {
  const context = useContext(Context);
  const toggleForm = () => {
    context.setForm(!context.form);
  };
  return (
    <div className="listChat w-1/4 p-6 border-0 border-r-2 flex flex-col justify-between">
      <div className="flex justify-between">
        <h1 className="font-medium text-2xl">List chat</h1>
      </div>
      <Search></Search>
      <ListRoom></ListRoom>
      <button
        onClick={toggleForm}
        className="bg-sky-500 rounded-lg font-medium text-xl p-2 text-white hover:bg-sky-700"
      >
        New chat room
      </button>
    </div>
  );
}
