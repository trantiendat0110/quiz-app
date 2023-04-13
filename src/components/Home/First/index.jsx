import React from "react";
import { Button } from "@mui/material";
export default function First() {
  return (
    <div id="first" className="py-32 bg-sky-600 h-screen">
      <div className="first-wrapper flex justify-between w-3/4 mx-auto">
        <div className="mb-auto text-white">
          <p
            data-aos="fade-right"
            data-aos-delay="500"
            className="my-20 text-5xl font-bold"
          >
            QUIZ FPT POLYTECHNIC
          </p>
          <p className="my-6 text-xl font-serif animate-bounce">
            Tham gia giải các bài tập khó nào ! ^^
          </p>
          <Button
            href="#courses"
            data-aos="fade-up"
            data-aos-delay="300"
            variant="contained"
            color="main"
            sx={{ p: 2 }}
          >
            Danh sách
          </Button>
        </div>
        <div data-aos="fade-left" data-aos-delay="800" className="my-auto">
          <img
            className="hover:rotate-6 transition-all duration-500 md:block hidden"
            src="https://www.fpt-software.com/wp-content/uploads/sites/2/2018/03/people.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
