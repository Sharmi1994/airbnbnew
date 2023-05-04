import React, { useState } from "react";

import options from "../buttons";

function NoofRooms(props) {
  const [selectedoption, setOption] = useState(JSON.parse(JSON.stringify(options)));
  function handleClick(value) {
    const newOptions = selectedoption.map((x) => {
      x.selected = false;
      if (x.value === value) {
        x.selected = true;
      }
      return x;
    });
    setOption(newOptions);
    console.log(newOptions);
    props.handleroomClick(props.type, value);
  }

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {selectedoption.map((obj, index) => {
        return (
          <div key={index}>
            <button
              type="button"
              onClick={() => handleClick(obj.value)}
              className={"buttondesign " + (obj.selected ? "btn-dark" : "")}
            >
              <span aria-label="Any">{obj.btnValue}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default NoofRooms;
