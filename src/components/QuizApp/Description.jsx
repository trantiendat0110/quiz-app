import { Button } from "@mui/material";
import React from "react";

export default function Description({ currentCourse, setStart }) {
  return (
    <div className="description mt-10 md:w-2/3 w-full mx-auto md:text-center">
      <div className="flex justify-center">
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
      <p data-aos="zoom-in" className="hidden md:block">
        Bài kiểm tra sau đây bao gồm những Câu Trắc Nghiệm Giới Từ Tiếng Anh
        phần 40: : là tổng hợp các bài tập về giới từ nâng cao theo số câuhỏi,có
        đáp án chấm điểm mỗi bàiBài kiểm tra sau đây bao gồm những Câu Trắc
        Nghiệm Giới Từ Tiếng Anh phần 40: : là tổng hợp các bài tập về giới từ
        nâng cao theo số câuhỏi,có đáp án chấm điểm mỗi bài Đề luyện tập tiếng
        Anh gồm nhiều câu hỏi trắc nghiệm cách dùng giới từ khác nhau giúp bạn
        đọc ôn tập kỹ lưỡng kiến thức đã học về phân loại giới từ hiệu quả. Cách
        dùng giới từ IN – ON – AT thường hay gây nhiều nhầm lẫn cho những bạn
        mới học. Hy vọng qua bài kiểm tra trắc nghiệm trực tuyến này bạn sẽ nắm
        vững kiến thức về giới từ và thành công nâng cao điểm số của mình trong
        thời gian tới nhé!!!!
      </p>
      <div className="w-full text-center">
        <Button
          sx={{
            mx: "auto",
            mt: 10,
            px: 8,
            py: 1.8,
            borderRadius: "15rem",
            width: "50%",
          }}
          onClick={() => {
            setStart(true);
          }}
          variant="contained"
          color="main"
        >
          Bắt đầu
        </Button>
      </div>
    </div>
  );
}
