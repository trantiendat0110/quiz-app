import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import LoginWithGg from "../../components/Login/LoginWithGg";
import Login from "../../components/Login/Login";
import Register from "../../components/Login/Register";
import Loading from "../../layout/Loading";
export default function LoginPage() {
  const navigation = useNavigate();
  const userData = useContext(UserContext);
  const [register, setRegister] = useState(false);
  const [loading, setLoad] = useState(false);
  console.log("login re render");
  useEffect(() => {
    function checkLogin() {
      userData.getData() ? navigation("/") : navigation("/login");
    }
    checkLogin();
  }, []);

  return !loading ? (
    <div
      data-aos-delay="300"
      data-aos="flip-left"
      className="login-page w-screen pt-20"
    >
      <div className="md:shadow-xl md:border rounded-xl md:w-1/4 w-full m-auto p-10 pb-4">
        <div className="flex justify-between mb-10">
          <Link
            className="text-orange-600 font-serif m-auto ml-0 border-b-2 border-orange-600 hover:bg-orange-100 p-2 rounded-t transition-all"
            to={"/"}
          >
            Quay lại
          </Link>
          <p className="m-auto text-xl font-serif mr-0">ĐĂNG NHẬP</p>
        </div>
        <Login setLoad={setLoad}></Login>
        <LoginWithGg navigation={navigation}></LoginWithGg>
        <button
          onClick={() => {
            setRegister(true);
          }}
          className="mx-auto block mt-10 hover:text-xl hover:text-violet-600 transition-all h-10"
        >
          Đăng ký?
        </button>
        {register ? (
          <Register setLoad={setLoad} setRegister={setRegister}></Register>
        ) : (
          ""
        )}
      </div>
    </div>
  ) : (
    <Loading></Loading>
  );
}
