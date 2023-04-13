import React, { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Navigation from "./Navigation";

export default function SideBar({ sideBar, setSideBar }) {
  const sideBarElement = useRef();
  if (sideBar) {
    sideBarElement.current.classList.remove("hidden");
  }
  return (
    <div
      ref={sideBarElement}
      className="SideBar fixed left h-full w-full z-50 top-0 hidden"
    >
      <div className="sideBar-wrapper h-full relative">
        <div className="side-bar h-full flex justify-between border-r">
          <div className="flex flex-col overflow-y-scroll bg-white ">
            <p className="text-2xl text-orange-600 p-4 m-2 font-bold">Danh sách QUIZ</p>
            <Navigation></Navigation>
          </div>
          <div
            onClick={() => {
              setSideBar(false);
              sideBarElement.current.classList.add("hidden");
            }}
            className="close-side text-2xl p-4 opacity-50 bg-slate-900 flex-1"
          >
            <span className="float-right cursor-pointer hover:opacity-50">
              <AiOutlineClose></AiOutlineClose>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
