import React from "react";
import { Subject } from "../../../db/Subjects";
import LinkBar from "./LinkBar";
export default function Navigation() {
  return (
    <nav className="flex flex-col">
      {Subject.map((item) => {
        return <LinkBar key={item.Id} props={item}></LinkBar>
      })}
    </nav>
  );
}
