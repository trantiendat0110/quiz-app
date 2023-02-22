import React, { useContext, useEffect, useRef, useState } from "react";
import avatar from "../../assets/img/avatar.jpg";
import { Context } from "../../global/Context";
export default function User(props) {
  const context = useContext(Context);
  const roomElement = useRef();
  const deleteElement = useRef();
  const [isSetting, setIsSetTing] = useState(false);
  useEffect(() => {
    deleteElement.current.addEventListener("click", (e) => {
      console.log(e.target);
      setIsSetTing(!isSetting);
      e.stopPropagation();
    });
    return () => {};
  }, []);
  const changeUser = () => {
    context.setCurrentRoom(() => {
      window.localStorage.setItem("currentRoom", roomElement.current.value);
      return roomElement.current.value;
    });
  };
  return (
    <button
      ref={roomElement}
      onClick={() => {
        changeUser();
      }}
      value={props.data.roomId}
      className="z-50 flex transition-all hover:bg-slate-200 p-4 rounded w-full room"
    >
      <p className="relative">
        <img src={avatar} className="avatar_list" alt="" />
        <i className="status_list absolute top-10 border right-0 bg-green-600"></i>
      </p>
      <span className="m-auto ml-6">
        <p className="font-medium leading-5">{props.data.nameRoom}</p>
        <p className="text-sm text-slate-400 leading-5">
          {props.data.nameRoom}
        </p>
      </span>
      <p ref={deleteElement} className="m-auto mr-0 deleteIcon transition-all">
        <i className="fa-solid fa-trash hover:bg-slate-100 p-2 px-3 rounded text-sky-500 text-2xl"></i>
      </p>
    </button>
  );
}
