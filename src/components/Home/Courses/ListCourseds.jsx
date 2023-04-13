import React from "react";
import { Subject } from "../../../db/Subjects";
import Course from "./Course";
import { Box } from "@mui/material";

export default function ListCourseds({ coursed }) {
  const ListCoursedStyle = {
    "&::-webkit-scrollbar": {
      borderRadius: 10,
      width: 10,
      height: ".8em",
    },
    "&::-webkit-scrollbar-track": {
      width: 10,
      backgroundColor: "#e5e7eb",
    },
    "&::-webkit-scrollbar-thumb": {
      width: 10,
      backgroundColor: "rgb(25 118 210)",
      borderRadius: 10,
    },
  };
  return coursed.length >= 1 ? (
    <Box
      sx={ListCoursedStyle}
      className="course-list my-20 w-full overflow-x-scroll"
    >
      <div className="courseList-wrapper flex justify-between w-fit gap-10">
        {Subject.map((item) => {
          const Coursed = coursed.map((course) => {
            if (course.course_id === item.Id) {
              return (
                <Course
                  key={item.Id}
                  props={item}
                  status={"Làm lại"}
                  progress={course.progress}
                ></Course>
              );
            }
          });
          return Coursed;
        })}
      </div>
    </Box>
  ) : (
    <div className="w-full text-center h-80">
      <p className="mt-20 text-2xl font-serif">Không có khoá học nào !</p>
    </div>
  );
}
