import React, { useContext } from "react";
import Profile from "./Profile";
import { UserContext } from "../context/UserContext";

const  Navbar = () => {

 // const data = useContext(UserContext)
//  console.log(data);
  
  return (
    <nav
      style={{
        display: "flex",
        marginTop:"40px",
        width: '90%',
        justifyContent: "space-between",
        alignItems: "center",
        padding: " 0px 20px",
        backgroundColor: "#1b1b1b",
        color: "#fff",
        border: "1px solid #fff",
        borderRadius: "5px",
        height: "auto",
      }}
    >
      <h1>LOGO</h1>
      <Profile />
    </nav>
  );
};

export default Navbar;  
