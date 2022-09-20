import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";
import { userColumns } from './../datatablesource';

// let user
// if (localStorage.getItem("user") !== null) {
//     user = JSON.parse(localStorage.getItem("user"))
// } else {
//     user = null
// }
const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null ,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};