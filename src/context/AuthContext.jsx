import axios from "axios";
import React, { createContext, useState } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const handleLogin = (body) => {
    axios({
      method: "post",
      url: "https://reqres.in/api/login",
      data: body,
    })
      .then((res) => {setToken(res.data.token)})
      .catch((error) => {console.log(error)});
  };

  const value = {
    handleLogin,
    token,
    setToken
  };

  return <AuthContext.Provider  value={value}>{children}</AuthContext.Provider>;
};
