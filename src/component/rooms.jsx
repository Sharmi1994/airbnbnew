import React from "react";
import { useLocation } from "react-router-dom";

function Rooms() {
  const location = useLocation();
  const id = location.state?.Value;
  console.log(id);
  return <div>HEllo world</div>;
}

export default Rooms;
