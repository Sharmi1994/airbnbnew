import React, { useState } from "react";
import Property from "../property";

function PropertyType(props) {
  const [propertytype, setPropertytype] = useState([]);
  const [selectedPropety, setselectedProperty] = useState([]);

  function handlepropertyClick(value) {
    const updatedProperty = Property.map((obj) => {
      if (obj.value === value) {
        obj.isselected = !obj.isselected;
      }

      return obj;
    });
    //this contain array with value and isselected true and false
    setPropertytype(updatedProperty);
    // filter function filter the array with isselected ture and map function map the value alone
    const filtervalue = updatedProperty
      .filter((obj) => obj.isselected)
      .map((obj) => obj.value);
//send the value in array
    setselectedProperty(filtervalue);

    props.handleProperty(selectedPropety);
  }
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {Property.map((obj, index) => {
        return (
          <div className="propetytypediv" key={index}>
            <button
              onClick={() => {
                handlepropertyClick(obj.value);
              }}
              className={
                "buttondecors" + (obj.isselected ? "btn-secondary" : "")
              }
            >
              <div>
                <div>
                  <img src={obj.src} alt=" propertyimg.png" />
                </div>
                <div>{obj.value}</div>
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default PropertyType;
