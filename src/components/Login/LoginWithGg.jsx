import React from "react";
import { auth, googleProvider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@mui/material";

export default function LoginWithGg({ navigation }) {
  const signInGG = async () => {
    await signInWithPopup(auth, googleProvider)
      .then((data) => {
        const user = {
          fullName: data.user.displayName,
          img: data.user.photoURL,
          email: data.user.email,
          uid: data.user.uid,
        };
        localStorage.setItem("userData", JSON.stringify(user));
        navigation("/");
      })
      .catch((error) => {
        navigation("/404");
      });
  };

  return (
    <Button
      onClick={signInGG}
      variant="outlined"
      fullWidth
      color="main"
      sx={{
        p: 2,
        border: 1,
      }}
    >
      <span className="m-auto text-2xl">
        <FcGoogle></FcGoogle>
      </span>
      <p className="flex-1">Bằng tài khoản Google</p>
    </Button>
  );
}
