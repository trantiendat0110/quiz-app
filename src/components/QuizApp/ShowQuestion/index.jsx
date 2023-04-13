import React from "react";
import ListQuestion from "./ListQuestion";
export default function ShowQuestion({ currentCourse }) {
  return (
    <div className="quiz-start mt-10">
      <div className="wrapper">
        <div data-aos="zoom-in" className="mainQuestion md:w-2/3 w-full mx-auto">
          <div className="mainQuestion-wrapper p-2 bg-slate-100 rounded-lg">
            <ListQuestion currentCourse={currentCourse}></ListQuestion>
          </div>
        </div>
      </div>
    </div>
  );
}
