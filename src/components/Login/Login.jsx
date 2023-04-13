import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function Login({ setLoad }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    setLoad(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = {
          fullName: userCredential.user.displayName,
          img: userCredential.user.photoURL,
          email: userCredential.user.email,
          uid: userCredential.user.uid,
        };
        console.log(userCredential.user);
        localStorage.setItem("userData", JSON.stringify(user));
        setLoad(false);
        navigation("/");
      })
      .catch((error) => {
        setLoad(false);
        alert("email hoạc mật khẩu không chính xác");
      });
  };
  return (
    <>
      <form>
        <label htmlFor="email">Email</label>
        <br />
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          name="email"
          className="w-full mt-2 p-2 border-slate-400 border outline-none rounded mb-4"
        />
        <br />
        <label htmlFor="password">Mật khẩu</label>
        <br />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          name="password"
          className="w-full mt-2 p-2 border-slate-400 border outline-none rounded mb-10"
        />
        <br />
        <Button
          onClick={signIn}
          variant="contained"
          color="main"
          fullWidth
          sx={{ p: 1 }}
        >
          Đăng nhập
        </Button>
      </form>
      <div className="w-full border-b h-1 relative my-10">
        <p className="w-1/3 text-center h-10 bg-white -top-3 right-1/3 mx-auto absolute">
          Hoặc
        </p>
      </div>
    </>
  );
}
