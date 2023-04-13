import React, { useContext, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SideBar from "./SideBar";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Nav from "../Nav";
import Search from "./Search";
import { Button } from "@mui/material";
import { UserContext } from "../../contexts/UserContext";

export default function Header() {
  const [sideBar, setSideBar] = useState(false);
  const isLogin = useContext(UserContext);
  const nav = useNavigate();
  const header = useRef();
  const header_wapper = useRef();
  const handleButton = () => {
    if (isLogin.getData()) {
      isLogin.logout();
    } else {
      nav("/login");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 50) {
        header_wapper.current.classList.add("stuck");
        header.current.classList.add("h-16");
      } else if (window.scrollY <= 0) {
        header_wapper.current.classList.remove("stuck");
        header.current.classList.remove("h-16");
      }
    });
    return () => {};
  });

  return (
    <>
      <header ref={header} className="">
        <div
          className="header-wrapper w-full z-50 shadow-md bg-white md:p-0 p-2"
          ref={header_wapper}
        >
          <div className="flex justify-between md:w-5/6 w-full m-auto">
            <div className="flex w-1/3">
              <span
                onClick={() => {
                  setSideBar(true);
                }}
                className="text-2xl cursor-pointer p-2 rounded-sm iconList my-auto bg-orange-600 text-white w-fit"
              >
                <AiOutlineUnorderedList />
              </span>
              <Link
                to="/"
                className="text-3xl font-serif text-center w-1/3 my-auto text-slate-600 hidden md:inline-block md:flex-1"
              >
                QUIZ FOLY
              </Link>
            </div>
            <Nav></Nav>
            <div className="flex md:w-1/3 w-full justify-end">
              <Search></Search>
              <Button
                onClick={() => {
                  handleButton();
                }}
                variant="contained"
                sx={{ my: "auto", ml: 2, width: "15rem" }}
                children={isLogin.getData() ? "Đăng xuất" : "Đăng nhập"}
              ></Button>
            </div>
          </div>
          <hr />
        </div>
      </header>
      <SideBar sideBar={sideBar} setSideBar={setSideBar}></SideBar>
    </>
  );
}
