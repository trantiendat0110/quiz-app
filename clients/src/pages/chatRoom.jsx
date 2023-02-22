import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BoxMessage from "../components/BoxMessage";
import FormAddGroup from "../components/FormAddGroup";
import Header from "../components/Header";
import ListRoom from "../components/ListRoom";
import { Context } from "../global/Context";

export default function ChatRoom() {
  const nav = useNavigate();
  const context = useContext(Context);
  useEffect(() => {
    if (!window.localStorage.getItem("isLogin")) {
      nav("/login");
    }
  });
  return (
    <>
      <Header></Header>
      <div className="main flex">
        {context.form ? (
          <div id="formAddGroup">
            <FormAddGroup></FormAddGroup>
          </div>
        ) : (
          ""
        )}
        <ListRoom></ListRoom>
        <BoxMessage></BoxMessage>
      </div>
    </>
  );
}
