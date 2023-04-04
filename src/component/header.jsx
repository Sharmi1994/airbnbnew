import React, { useState } from "react";
import Popupdiv from "./Popupdiv";


function Header() {
const[ popup, setpopup]= useState("");
  function togglepopup(){
setpopup(!popup);
  }
  
  return (
    <React.Fragment>
    <div className="heading">
      {" "}
      <h3 className="header">Show total prices up front </h3> <span className="topop" onClick={togglepopup}>
      Learn More
    </span>
    { popup&& <Popupdiv/>}
    </div>
 
    </React.Fragment>
  );
}

export default Header;
