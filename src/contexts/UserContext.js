import { createContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const user = {
    getData: () => {
      const data = localStorage.getItem("userData");
      return JSON.parse(data);
    },
    logout: () => {
      localStorage.removeItem("userData");
      signOut(auth).then(() => {
        console.log('logout');
      }).catch((error) => {
        console.log(error);
      });
      window.location.href = "/login";
    },
  };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
