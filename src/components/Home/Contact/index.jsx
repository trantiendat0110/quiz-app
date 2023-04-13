import React from "react";
import { Stack } from "@mui/material";
export default function Contact() {
  return (
    <div id="contact" className="mt-20 bg-blue-900 py-20">
      <h1
        data-aos="fade-right"
        data-aos-delay="200"
        className="mx-auto text-4xl md:w-1/4 text-white font-bold text-center"
      >
        Liên hệ / Hỏi đáp
      </h1>
      <div className="anwser-wrapper mx-10 md:mx-auto mt-10 md:w-1/3">
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          className="my-auto"
        >
          <input
            className="outline-none w-full block p-3 rounded-xl mr-4 text-xl"
            placeholder="Câu hỏi cho chúng tôi ?"
          />
          <button
            style={{ backgroundColor: "#33B2C1" }}
            className="md:w-1/4 w-1/2 text-white rounded-xl text-xl font-medium"
          >
            Gửi
          </button>
        </Stack>
      </div>
    </div>
  );
}
