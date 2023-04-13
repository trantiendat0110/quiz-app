import React, { useRef, useState } from "react";
import ListSearch from "./ListSearch";
import { TextField } from "@mui/material";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const inputElement = useRef();
  const handleClearInput = () => {
    inputElement.current.value = "";
    setSearchValue("");
  };
  return (
    <div className="my-auto relative w-full">
      <TextField
        ref={inputElement}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        variant="outlined"
        label="Tìm kiếm"
        size="small"
        color="main"
        sx={{ width: "100%" }}
      />
      <ListSearch
        searchValue={searchValue}
        handleClearInput={handleClearInput}
      ></ListSearch>
    </div>
  );
}
