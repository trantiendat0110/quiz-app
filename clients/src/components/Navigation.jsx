import React from "react";
import avatar from "../assets/img/avatar.jpg";
export default function Navigation() {
  return (
    <div className="flex justify-between shadow">
      <div className="flex ml-2">
        <p className="avatar relative">
          <img src={avatar} width={40} className="avatar" alt="" />
          <i className="status absolute top-6 border right-0 bg-green-600"></i>
        </p>
        <span className="m-auto ml-3">
          <p className="font-medium leading-5">full name</p>
          <p className="text-sm text-slate-400 leading-5 float-left">status</p>
        </span>
        <i class="m-auto ml-2 fa-solid text-sm text-sky-600 fa-caret-down"></i>
      </div>
      <div>
        <i class="text-sky-600 p-2 m-1 fa-solid fa-video"></i>
        <i class="text-sky-600 p-2 m-1 fa-solid fa-phone"></i>
        <i class="text-sky-600 p-2 m-1 text-xl fa-solid fa-xmark"></i>
      </div>
    </div>
  );
}
