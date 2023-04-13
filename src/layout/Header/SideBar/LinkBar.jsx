import React from "react";
export default function LinkBar({ props }) {
  return (
    <div className="flex hover:bg-gradient-to-r hover:from-orange-600 hover:to-pink-600 hover:text-white transition">
      <img className="rounded-full m-auto ml-10" width={"40px"} src={props.Logo} alt="" />
      <a
        href={"/quiz-app/" + props.Id}
        className="flex-1 font-medium my-4 p-4 mx-2"
      >
        {props.Name}
      </a>
    </div>
  );
}
