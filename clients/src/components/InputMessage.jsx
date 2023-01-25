import React from "react";

export default function InputMessage() {
  return (
    <div className="flex justify-between absolute bottom-0 w-full pt-2 shadow">
      <div>
        <i className="text-sky-600 m-1 p-2 fa-solid fa-plus"></i>
        <i className="text-sky-600 m-1 p-2 fa-solid fa-iage"></i>
        <i className="text-sky-600 m-1 p-2 fa-solid fa-face-smile"></i>
      </div>
      <input
        type="text"
        placeholder="Aa"
        className="rounded-2xl outline-none bg-slate-200 shadow px-2 py-1 mb-2"
      />
      <i className="text-red-600 text-xl fa-solid fa-heart mx-2 px-2"></i>
    </div>
  );
}
