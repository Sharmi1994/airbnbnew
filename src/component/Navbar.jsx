import React, { useState } from "react";
import Detail from "./detail";

import Login from "./login";

import Search from "./search";

function Navbar() {
  const [onclick, setOnclick] = useState(false);
  function handleClick() {
    setOnclick(true);
  }

  return (
    <nav className="navbar" onClick={handleClick}>
      <div>
        <img
          className="img4"
          src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg"
          alt="img2.png"
        ></img>
      </div>

      {onclick ? <Detail/> :<Search />}

      <Login />
    </nav>
  );
}

export default Navbar;
