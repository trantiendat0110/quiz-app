import axios from "axios";
import { createContext, useEffect, useState } from "react";

const Context = createContext();
function ContextProvider({ children }) {
  const [listRoomData, setListRoomData] = useState([]);
  const [userData, setUserData] = useState({});
  const [currentRoom, setCurrentRoom] = useState(window.localStorage.getItem('currentRoom'))
  const [form, setForm] = useState(false)
  const value = {
    form,
    setForm,

    listRoomData,
    setListRoomData,
    
    userData,
    setUserData,
    
    setCurrentRoom
  };
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/user/userId/" + window.localStorage.getItem('isUser'))
      .then((res) => setUserData(Object.values(res.data)[0]));
  }, [])
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/rooms/userId/" + window.localStorage.getItem('isUser'))
      .then((res) => setListRoomData(res.data));
  }, []);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
export { Context, ContextProvider };
