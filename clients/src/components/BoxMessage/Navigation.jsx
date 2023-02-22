import React, { } from "react";
import avatar from "../../assets/img/avatar.jpg";
export default function Navigation({room}) {
  return (
    <div className="flex justify-between w-full bg-white">
      <div className="flex ml-2 p-1">
        <p className="avatar relative ">
          <img src={avatar} width={40} className="avatar" alt="" />
          <i className="status absolute top-6 border right-0 bg-green-600"></i>
        </p>
        <span className="m-auto ml-3">
          <p className="font-medium leading-5">{room ? room.nameRoom : 'loading'}</p>
          <p className="text-sm text-slate-400 leading-5 float-left">Đang hoạt động</p>
        </span>
        <i className="m-auto ml-2 fa-solid text-sm text-sky-600 fa-caret-down"></i>
      </div>
      <div>
        <i className="text-sky-600 p-2 m-1 fa-solid fa-video"></i>
        <i className="text-sky-600 p-2 m-1 fa-solid fa-phone"></i>
        <i className="text-sky-600 p-2 m-1 fa-solid fa-circle-exclamation"></i>
      </div>
    </div>
  );
}
