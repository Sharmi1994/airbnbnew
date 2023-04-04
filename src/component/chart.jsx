import React from "react";

function BasicDemo() {
  return (
    <div>
      <div>
        {" "}
        min price
        <span>$</span> <input  autocomplete="off" type="text" aria-describedby="" value="10" />
      </div>
      <div>
        {" "}
        max price
        <span>$</span> <input  autocomplete="off" type="text" aria-describedby="" value="750" />
      </div>
    </div>
  );
}

export default BasicDemo;
