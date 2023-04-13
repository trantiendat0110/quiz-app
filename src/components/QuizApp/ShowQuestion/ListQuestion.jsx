import React, { useContext, useEffect, useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate, useParams } from "react-router-dom";
import { listQuestion } from "../../../db/Quizs/index.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Question from "./Question.jsx";
import { Button, Stack } from "@mui/material";
import load from "../../../assets/img/loading-box.png";
import { UserContext } from "../../../contexts/UserContext.js";
import { uid } from "uid";
import Timer from "./Timer.jsx";

export default function ListQuestion({ currentCourse }) {
  const user_id = useContext(UserContext).getData().uid;
  const nav = useNavigate();
  const notifyWarn = () =>
    toast.error("Sai mất ròi!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const notifySuccess = () =>
    toast.success("Chuẩn xác!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const db = getDatabase();
  const idCourse = useParams("id").id;
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [question, setQuestion] = useState({});
  const [score, setScore] = useState(0);
  const [loading, setLoad] = useState(false);
  const [completeQuestion, setCompleteQuestion] = useState([]);
  useEffect(() => {
    listQuestion.forEach((item) => {
      if (item.id === idCourse) {
        let newCoures = [];
        for (let index = 0; index < 10; index++) {
          newCoures.push(
            item.course[Math.floor(Math.random() * item.course.length)]
          );
        }
        setQuestion(newCoures);
      }
    });
  }, [idCourse]);
  const handleBackQuestion = (e) => {
    e.preventDefault();
    setCurrentQuestion(currentQuestion - 1);
  };
  const handleSuccessQuestion = (idAnwser) => {
    setScore(score + 1);
    notifySuccess();
    setCompleteQuestion([
      ...completeQuestion,
      { currentQuestion: currentQuestion, idAnwser: idAnwser, isAnwser: true },
    ]);
  };
  const handleFailQuestion = (idAnwser) => {
    notifyWarn();
    setCompleteQuestion([
      ...completeQuestion,
      { currentQuestion: currentQuestion, idAnwser: idAnwser, isAnwser: false },
    ]);
  };
  const handleNextQuestion = (e) => {
    e.preventDefault();
    if (currentQuestion !== 10) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  const handleSaveQuestion = (course_id, progress, user_id) => {
    let newData = {
      course_id: course_id,
      progress: progress,
      user_id: user_id,
    };
    if (window.confirm("Lưu tiến độ hiện tại?")) {
      set(ref(db, "scores/" + uid()), newData)
        .then(() => {
          nav("/");
        })
        .catch((error) => {
          nav("/404");
        });
    }
  };
  const handleChoseQuestion = (e) => {
    e.preventDefault();
    setLoad(true);
    let idAnwser = Number(e.target.value);
    idAnwser === question[currentQuestion - 1].AnswerId
      ? handleSuccessQuestion(idAnwser)
      : handleFailQuestion(idAnwser);
    setTimeout(() => {
      setLoad(false);
      handleNextQuestion(e);
    }, 1000);
  };

  const handleEndtime = () => {
    handleSaveQuestion(idCourse, score, user_id);
  };

  return question[currentQuestion - 1] ? (
    <div className="question">
      <div className="flex justify-between">
        <p className="my-2">
          Câu hỏi số :
          <b className="text-orange-600 text-xl"> {currentQuestion}</b>/{" "}
          {question.length}
        </p>
        <div className="md:flex md:justify-center hidden">
          <p className="text-3xl text-center m-4 font-serif">
            {currentCourse.Name}{" "}
          </p>
          <img
            className="my-auto"
            width={"50px"}
            src={currentCourse.Logo}
            alt=""
          />
        </div>
        <p className="my-2">
          Điểm : {score} /{" "}
          <i className="text-orange-600">{question.length * 1}</i>
        </p>
      </div>
      <p className="my-2 h-24 ">
        <b className="my-auto block bg-orange-100 p-4 rounded text-orange-600">
          {question[currentQuestion - 1].Text}
        </b>
      </p>
      <hr />
      <div className="h-96">
        {!loading ? (
          <div className="my-auto h-full flex justify-evenly flex-col ">
            <Question
              completeQuestion={completeQuestion}
              question={question}
              currentQuestion={currentQuestion}
              handleChoseQuestion={handleChoseQuestion}
            ></Question>
          </div>
        ) : (
          <img
            className="fixed top-1/3 w-1/3 right-1/3 animate-spin p-24"
            src={load}
            alt=""
          />
        )}
      </div>
      <div className="mt-4 flex justify-between">
        <Stack sx={{ display: "flex", flexDirection: "row" }}>
          <Button
            onClick={(e) => {
              handleBackQuestion(e);
            }}
            variant="contained"
            color="main"
            disabled={currentQuestion <= 1}
          >
            Back
          </Button>
          <Timer
            idCourse={idCourse}
            score={score}
            user_id={user_id}
            handleSaveQuestion={handleSaveQuestion}
            handleEndtime={handleEndtime}
          ></Timer>
        </Stack>
        <Stack sx={{ display: "flex", flexDirection: "row" }}>
          <Button
            onClick={() => {
              handleSaveQuestion(idCourse, score, user_id);
            }}
            variant="contained"
            sx={{ mr: 4 }}
            disabled={score <= 0}
          >
            Save
          </Button>
          <Button
            onClick={(e) => {
              handleNextQuestion(e);
            }}
            variant="contained"
            color="main"
            disabled={currentQuestion >= 10}
          >
            Next
          </Button>
        </Stack>
      </div>
    </div>
  ) : (
    "Loading.."
  );
}
