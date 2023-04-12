import React, { useState } from "react";

import amment from "../ammentitiesfile";

function Ammentities() {
  const [show, setShow] = useState(false);

  const [SpanText, setSpantext]= useState("Show More");

  function handleShow() {
    setShow(!show);
    setSpantext(SpanText==="Show More"?"Show Less":"Show More");
  }
  const groupedItems = amment.reduce((acc, item) => {
    const { Heading, ...rest } = item;
    if (!acc[Heading]) {
      acc[Heading] = [];
    }
    acc[Heading].push(rest);

    return acc;
  }, {});

  const essentials = groupedItems["Essentials"];
  const features = groupedItems["Features"];
  const location = groupedItems["Location"];
  const safety = groupedItems["Safety"];

  return (
    <div>
      <h3>Essentials</h3>
      <div className="amenty">
        {essentials.map((obj) => {
          return (
            <div style={{ display: "flex" }}>
              <input className="checkboxalign" type="checkbox" />
              <span>{obj.value}</span>
            </div>
          );
        })}
      </div>

     
      {show && (
        <React.Fragment>
          {" "}
          <hr />
          <h3>Features</h3>
          <div className="amenty">
            {features.map((obj) => {
              return (
                <div style={{ display: "flex" }}>
                  <input className="checkboxalign" type="checkbox" />
                  <span>{obj.value}</span>
                </div>
              );
            })}
          </div>
          <hr />
          <h3>Location</h3>
          <div className="amenty">
            {location.map((obj) => {
              return (
                <div style={{ display: "flex" }}>
                  <input className="checkboxalign" type="checkbox" />
                  <span>{obj.value}</span>
                </div>
              );
            })}
          </div>
          <hr />
          <h3>Safety</h3>
          <div className="amenty">
            {safety.map((obj) => {
              return (
                <div style={{ display: "flex" }}>
                  <input className="checkboxalign" type="checkbox" />
                  <span>{obj.value}</span>
                </div>
              );
            })}
          </div>
        </React.Fragment>
      )}


      <span  style={{ textDecoration: "underline" ,   cursor: "pointer",
            alignSelf: "flex-end",
            marginTop: "16px", }} onClick={handleShow}>
       {SpanText}
      </span>
      
    </div>
  );
}
export default Ammentities;
