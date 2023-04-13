import React from "react";
import Header from "./Header";
import "./layout.scss";

export default function Layout({ children }) {
  return (
    <>
      <Header></Header>
      {children()}
    </>
  );
}
