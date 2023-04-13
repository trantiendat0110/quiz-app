import React, { useEffect, useState } from "react";

export default function Timer({
  idCourse,
  score,
  user_id,
  handleSaveQuestion,
  handleEndtime
}) {
  const [timeM, setTimeM] = useState(5);
  const [timeS, setTimeS] = useState(0);

  useEffect(() => {
    if (timeM === -1) {
      handleEndtime();
    }
  }, [timeM]);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeS(timeS - 1);
      if (timeS === 0) {
        setTimeS(60);
        setTimeM(timeM - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeS]);
  return (
    <div className="m-auto ml-10 flex justify-between border-2 px-2">
      <p className="text-2xl font-bold border-r-2 px-2">{timeM}</p>
      <p className="text-2xl font-bold px-2">{timeS}</p>
    </div>
  );
}
