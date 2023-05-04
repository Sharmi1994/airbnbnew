import React, { useState } from "react";
import Access from "../accessibilty";

function Accessible() {
  const[show, setShow]=useState(false);
  const[spanText, setspanText]=useState("Show More");

  function handleClick(){
    setShow(!show);
    setspanText(spanText==="Show More"? "Show Less": "Show More")
  }

  const groupedValue = Access.reduce((acc, item) => {
    const { Heading, ...rest } = item;
    if (!acc[Heading]) {
      acc[Heading] = [];
    }

    acc[Heading].push(rest);

    return acc;
  }, {});

  const guestEntrance = groupedValue["Guest Entrance and Parking"];
  const bedRoom = groupedValue["Bedroom"];
  const bathRoom = groupedValue["Bathroom"];
  const adaptiveEqui = groupedValue["Adaptive Equipment"];
  return (
    <div>
      <h3>Guest Entrance and Parking</h3>
      <div className="amenty">
        {guestEntrance.map((obj, index) => {
            return(
          <div  key={index} style={{ display: "flex" }}>
            <input className="checkboxalign" type="checkbox" />
            <span style={{fontSize:"0.95rem"}}>{obj.value}</span>
          </div>);
        })}
      </div>

   
    {show&&(<React.Fragment>
      <hr/>
    <h3>Bedroom</h3>
      <div className="amenty">
        {bedRoom.map((obj) => {
            return(
          <div style={{ display: "flex"  }}>
            <input className="checkboxalign" type="checkbox" />
            <span style={{fontSize:"0.95rem"}}>{obj.value}</span>
          </div>);
        })}
      </div>
      <hr/>
      <h3>Bathroom</h3>
      <div className="amenty">
        {bathRoom.map((obj) => {
            return(
          <div style={{ display: "flex"}}>
            <input className="checkboxalign" type="checkbox" />
            <span style={{fontSize:"0.95rem"}}>{obj.value}</span>
          </div>);
        })}
      </div>
      <hr/>
      <h3>Adaptive Equipment</h3>
      <div className="amenty">
        {adaptiveEqui.map((obj) => {
            return(
          <div style={{ display: "flex" }}>
            <input className="checkboxalign" type="checkbox" />
            <span style={{fontSize:"0.95rem"}}>{obj.value}</span>
          </div>);
        })}
      </div></React.Fragment>
)}
          <span style={{textDecoration:"underline"}} onClick={handleClick}>{spanText}</span>
    </div>
  );
}

export default Accessible;
