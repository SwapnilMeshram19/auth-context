import { Button } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
const {token,setToken}=useContext(AuthContext);
  return (
    <div className="navbar">
        {
            !token? <Button variant="contained">Login</Button>:<Button variant="contained" onClick={()=>setToken(null)}>Logout</Button>
        }
     
   
    </div>
  );
};

export default Navbar;
