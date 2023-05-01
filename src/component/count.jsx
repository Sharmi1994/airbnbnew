import React, { useState } from "react";

import options from "../buttons";

function NoofRooms(props) {

  const [option, setOption]=useState([]);
  function handleRoomClick(value) {
   const newOptions =  options.map(x=>{
      x.selected = false
      if(x.value === value){
        x.selected = true
      }
      return x
    })
    setOption(newOptions);
    console.log(newOptions);
    props.handleroomClick(props.type, value);
  }

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {options.map((obj) => {
        return (
          <div>
            <button
              type="button"
              onClick={() => handleRoomClick(obj.value)}
              className={"buttondesign "+ (obj.selected? 'btn-dark':'')}
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
