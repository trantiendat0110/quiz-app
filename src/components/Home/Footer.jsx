import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaMailBulk } from "react-icons/fa";
import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";
export default function Footer() {
  return (
    <footer className="w-full bg-blue-800 text-white">
      <div className="w-5/6 m-auto flex justify-between">
        <div>
          <div className="flex">
            <span className="text-2xl p-2 m-2">
              <FaMapMarkerAlt />
            </span>
            <p className="my-auto text-left">
              82/7 Dũng sĩ thanh khê, Thanh Khê, Đà Nẵng
            </p>
          </div>
          <div className="flex">
            <span className="text-2xl p-2 m-2">
              <FaPhoneAlt />
            </span>
            <p className="my-auto text-left">0868650722</p>
          </div>
          <div className="flex">
            <span className="text-2xl p-2 m-2">
              <FaMailBulk />
            </span>
            <p className="my-auto text-left">trandatyl1@gmail.com</p>
          </div>
        </div>
        <div className="flex">
          <a href="http://facebook.com" className="inline text-4xl p-2 m-2">
            <AiFillFacebook></AiFillFacebook>
          </a>
          <a href="http://youtube.com" className="inline text-4xl p-2 m-2">
            <AiFillYoutube></AiFillYoutube>
          </a>
        </div>
      </div>
      <p className="block text-center p-2 border-2 border-sky-600">Copyright 2023 © Bản quyền thuộc về Trần Tiến Đạt</p>
    </footer>
  );
}
