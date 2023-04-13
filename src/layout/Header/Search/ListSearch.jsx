import React from "react";
import { Link } from "react-router-dom";
import { Subject } from "../../../db/Subjects";

export default function ListSearch({ searchValue, handleClearInput }) {
  return searchValue ? (
    <div
      data-aos="zoom-in-left"
      className="listSearch absolute p-4 bg-white shadow-xl z-50 right-0 -ml-20 rounded-md"
    >
      <ul className="h-72 overflow-x-hidden overflow-y-scroll">
        {Subject.map((item) => {
          return new RegExp(searchValue.toLocaleLowerCase()).exec(
            item.Name.toLocaleLowerCase()
          ) ? (
            <li key={item.Id} className="flex p-2 text-center border-b-2 h-20">
              <img
                width={"50px"}
                className="m-auto ml-0"
                src={item.Logo}
                alt=""
              />
              <p className="flex-1">{item.Name}</p>
              <a
                onClick={() => {
                  handleClearInput();
                }}
                href={"/quiz-app/" + item.Id}
                className="my-auto text-sm p-4 rounded bg-orange-600 text-white"
              >
                Start
              </a>
            </li>
          ) : (
            ""
          );
        })}
      </ul>
      <button
        onClick={() => {
          handleClearInput();
        }}
        className="w-full p-2 rounded bg-slate-300"
      >
        Đóng
      </button>
    </div>
  ) : (
    ""
  );
}
