import React from "react";
import Course from "./Course";
import { Subject } from "../../../db/Subjects";
export default function ListCourse() {
  return (
    <div className="course-list mt-20">
      <div className="courseList-wrapper md:grid md:grid-cols-4 md:gap-10 flex flex-col">
        {Subject.map((item) => {
          return <Course key={item.Id} props={item} status={'Tham gia'}></Course>;
        })}
      </div>
    </div>
  );
}
