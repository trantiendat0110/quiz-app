import React, { useContext, useEffect, useState } from "react";
import ListCourse from "./ListCourse";
import ListCourseds from "./ListCourseds";
import { UserContext } from "../../../contexts/UserContext";
import { child, get, getDatabase, ref } from "firebase/database";
import { Box, Skeleton, Stack } from "@mui/material";
export default function Courses() {
  const userContext = useContext(UserContext);
  const user_id = userContext.getData() ? userContext.getData().uid : "";
  const [coursed, setCoursed] = useState([]);
  const [load, setLoad] = useState(false);
  console.log(coursed);
  const dbRef = ref(getDatabase());
  const fetchCourse = () => {
    setLoad(false);
    get(child(dbRef, `scores/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let result = Object.keys(snapshot.val()).map(
            (key) => snapshot.val()[key]
          );
          let newCoursed = result.map((item) => {
            if (item.user_id === user_id) {
              return item;
            }
          });
          setCoursed(
            newCoursed.filter(function (element) {
              return element !== undefined;
            })
          );
          setLoad(true);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchCourse();
  }, []);
  return (
    <div id="courses" className="py-20">
      <div className="courses-wrapper w-3/4 mx-auto">
        <>
          <h1 className="text-left text-3xl font-bold text-orange-600">
            TỪNG HỌC
          </h1>
          {load ? (
            <ListCourseds coursed={coursed}></ListCourseds>
          ) : (
            <Stack>
              <Skeleton height={"400px"}></Skeleton>
              <Skeleton></Skeleton>
            </Stack>
          )}
        </>
        <h1 className="text-left text-3xl font-bold text-orange-600">TẤT CẢ</h1>
        <ListCourse></ListCourse>
      </div>
    </div>
  );
}
