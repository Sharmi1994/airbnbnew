import React, { useState } from "react";

import amment from "../ammentitiesfile";

function Ammentities(props) {
  const [show, setShow] = useState(false);
  const [selectedAmmenty, setselectedAmmenty] = useState([]);

  const [SpanText, setSpantext] = useState("Show More");

  function handleShow() {
    setShow(!show);
    setSpantext(SpanText === "Show More" ? "Show Less" : "Show More");
  }

  function handleAmmenty(value) {
    //once check box clicked make the select value true
    const updatedAmmenty = amment.map((obj) => {
      if (obj.value === value) {
        obj.select = !obj.select;
      }
      return obj;
    });
    // make a filter to filter array that have true and map only the value
    const finalAmmenty = updatedAmmenty
      .filter((obj) => obj.select)
      .map((obj) => obj.value);
    setselectedAmmenty(finalAmmenty);

    props.handleAmmentities(selectedAmmenty);
  }

  //reducemethod is used to split the array value based on the Heading
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
        {essentials.map((obj, index) => {
          return (
            <div key={index} style={{ display: "flex" }}>
              <input
                className="checkboxalign"
                type="checkbox"
                onClick={() => handleAmmenty(obj.value)}
              />
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
            {features.map((obj, index) => {
              return (
                <div key={index} style={{ display: "flex" }}>
                  <input
                    className="checkboxalign"
                    type="checkbox"
                    onClick={() => handleAmmenty(obj.value)}
                  />
                  <span>{obj.value}</span>
                </div>
              );
            })}
          </div>
          <hr />
          <h3>Location</h3>
          <div className="amenty">
            {location.map((obj, index) => {
              return (
                <div key={index} style={{ display: "flex" }}>
                  <input
                    className="checkboxalign"
                    type="checkbox"
                    onClick={() => handleAmmenty(obj.value)}
                  />
                  <span>{obj.value}</span>
                </div>
              );
            })}
          </div>
          <hr />
          <h3>Safety</h3>
          <div className="amenty">
            {safety.map((obj, index) => {
              return (
                <div key={index} style={{ display: "flex" }}>
                  <input
                    className="checkboxalign"
                    type="checkbox"
                    onClick={() => handleAmmenty(obj.value)}
                  />
                  <span>{obj.value}</span>
                </div>
              );
            })}
          </div>
        </React.Fragment>
      )}

      <span
        style={{
          textDecoration: "underline",
          cursor: "pointer",
          alignSelf: "flex-end",
          marginTop: "16px",
        }}
        onClick={handleShow}
      >
        {SpanText}
      </span>
    </div>
  );
}
export default Ammentities;
