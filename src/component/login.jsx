import React from "react";
import { FaBars, FaUser } from "react-icons/fa";

import { FaGlobe } from "react-icons/fa";
function Login() {
  return (
    <div className="login">
      <div className="airtitle box">Airbnb your home</div>

      <div className="box">
        {" "}
        <FaGlobe />
      </div>

      <div className="box userlogin ">
        {" "}
        <FaBars /> <FaUser />
      </div>
    </div>
  );
}

export default Login;
