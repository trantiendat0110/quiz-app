import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ShowQuestion from "../../components/QuizApp/ShowQuestion";
import Description from "../../components/QuizApp/Description";
import { Subject } from "../../db/Subjects";
import { useParams } from "react-router-dom";
import "./quizApp.scss";
import { Button } from "@mui/material";

export default function QuizApp() {
  const [start, setStart] = useState(false);
  const idCourse = useParams("id").id;
  const [currentCourse, setCurrentCourse] = useState({});

  useEffect(() => {
    Subject.forEach((element) => {
      if (element.Id === idCourse) {
        setCurrentCourse(element);
      }
    });
  }, [idCourse]);
  useEffect(() => {
    const alertUser = (e) => {
      e.preventDefault();
      e.returnValue = "ahlllo";
    };
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);
  return window.localStorage.getItem("userData") ? (
    <>
      <Helmet>
        <title>Giải các bài tập khó ở đây</title>
      </Helmet>
      <div id="quiz-app">
        <div className="quiz-app-wrapper md:w-5/6 w-full mx-auto">
          {!start ? (
            <Description
              currentCourse={currentCourse}
              setStart={setStart}
            ></Description>
          ) : (
            <ShowQuestion currentCourse={currentCourse}></ShowQuestion>
          )}
        </div>
      </div>
    </>
  ) : (
    <p className="m-20 text-center text-2xl font-serif">
      <Button
        sx={{ fontSize: "1em" }}
        variant="contained"
        color="main"
        href="/login"
      >
        Đăng nhập
      </Button>{" "}
      để tham gia giải
    </p>
  );
}
