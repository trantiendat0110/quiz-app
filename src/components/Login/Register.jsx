import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Button, Stack, TextField } from "@mui/material";

export default function Register({ setLoad, setRegister }) {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email không để trống")
      .email(<p className="text-red-600">Email không đúng định dạng</p>),
    password: Yup.string()
      .required("Password không để trống")
      .min(6, "Password lớn hơn 6 ký tự")
      .max(40, "Password bé hơn 40 ký tự"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Mật khẩu không chính xác"
    ),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = async (data) => {
    setLoad(true);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setRegister(false);
        setLoad(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="form-register">
      <div
        onClick={() => {
          setRegister(false);
        }}
        className="fixed left-0 top-0 w-full h-screen bg-slate-600 z-50 opacity-50"
      ></div>
      <div
        data-aos="zoom-in"
        data-aos-duration="500"
        className="wrapper md:h-fit md:w-1/3 md:left-1/3 h-5/6 left-0 top-20 shadow-xl bg-white opacity-100 fixed z-50 p-10 rounded-xl"
      >
        <p className="text-center mb-6 text-xl font-serif">ĐĂNG KÝ</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <br />
          <TextField
            {...register("email")}
            fullWidth
            id="outlined-basic"
            label="Email"
            variant="outlined"
            error={!!errors.email}
          />
          <p className="h-4">{errors.email?.message}</p>
          <br />
          <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
            <Stack direction={"column"}>
              <TextField
                {...register("password")}
                fullWidth
                id="outlined-basic"
                label="Mật khẩu"
                variant="outlined"
                type="password"
                error={!!errors.password}
              />
              <br />
              <p className="h-4">{errors.password?.message}</p>
            </Stack>
            <Stack direction={"column"}>
              <TextField
                {...register("confirmPassword")}
                id="outlined-basic"
                label="Nhập lại mật khẩu"
                variant="outlined"
                type="password"
                fullWidth
                error={!!errors.confirmPassword}
              />
              <br />
              <p className="h-4">{errors.confirmPassword?.message}</p>
            </Stack>
          </Stack>
          <br />
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button
              variant="contained"
              onClick={() => {
                setRegister(false);
              }}
              sx={{ float: "left" }}
              color="main"
            >
              Quay lại
            </Button>
            <Button variant="contained" type="submit" sx={{ float: "right" }}>
              Đăng ký
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}
