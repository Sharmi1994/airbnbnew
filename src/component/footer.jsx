import React from "react";

import { FaCopyright } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <div>
        <FaCopyright />
        <h3>{year}</h3>
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
