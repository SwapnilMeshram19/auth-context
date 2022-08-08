
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
const [email,setEmail]=useState("");
const [password,setPassword]=useState("")
  
const {token,handleLogin}=useContext(AuthContext)
  
  return (
    <Box
      variant="div"
      className="login"
      sx={{ width: "400px", margin: "auto", marginTop: "50px" }}
    >
      <Typography variant="h4" sx={{ margin: "10px", fontWeight: "700" }}>
        LOGIN
      </Typography>
      <TextField
        variant="outlined"
        size="small"
        label="Email"
        name="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        sx={{ margin: "10px" }}
      />
      <br />
      <TextField
        variant="outlined"
        size="small"
        label="Password"
        name="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        sx={{ margin: "10px" }}
      />
      <br />
      <Button onClick={()=>handleLogin({email,password})} variant="contained" sx={{ margin: "10px" }}>
        Login
      </Button>
    </Box>
  );
};
