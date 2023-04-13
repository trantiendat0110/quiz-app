import { Button } from "@mui/material";
import React, { useState } from "react";

export default function Course({ props, status, progress }) {
  return (
    <div
      data-aos="flip-left"
      data-aos-delay="200"
      className="course mb-20 h-52 w-72 relative text-center shadow-lg hover:shadow-xl rounded-2xl"
    >
      <img className="m-auto" src={props.Logo} alt="" />
      <p className="h-20 absolute top-10 font-bold w-full text-lg">
        {props.Name}
      </p>
      <div className="start-btn z-50">
        <Button
          variant="outlined"
          color="main"
          href={"./quiz-app/" + props.Id}
          sx={{
            px: 4,
            py: 1,
            borderRadius: "8em",
            border: 1,
            "&:hover": { backgroundColor: "#ea580c", color: "white" },
          }}
        >
          {status}
        </Button>
      </div>
      {progress ? (
        <span className="absolute right-2 bottom-2 bg-slate-200 px-4 p-2 rounded-full opacity-60">
          {progress} / 10
        </span>
      ) : (
        ""
      )}
    </div>
  );
}
