import React, { useEffect } from "react";

export default function Question({
  completeQuestion,
  question,
  currentQuestion,
  handleChoseQuestion,
}) {
  useEffect(() => {
    const anwserElements = document.querySelectorAll(".anwserElement");
    completeQuestion.forEach((item) => {
      if (item.currentQuestion === currentQuestion) {
        anwserElements.forEach((anwserElement) => {
          if (item.idAnwser === Number(anwserElement.value)) {
            item.isAnwser
              ? anwserElement.classList.add("success")
              : anwserElement.classList.add("failed");
          }
          anwserElement.setAttribute("disabled", "");
        });
      }
    });
  }, [currentQuestion]);
  return question[currentQuestion - 1].Answers.map((item) => {
    return (
      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-offset="0"
        key={item.Id}
      >
        <button
          value={item.Id}
          onClick={(e) => {
            handleChoseQuestion(e);
          }}
          className="anwserElement transition-all"
          key={item.Id}
        >
          {item.Text}
        </button>
      </div>
    );
  });
}
