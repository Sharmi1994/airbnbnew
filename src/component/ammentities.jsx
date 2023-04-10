import React from "react";

import amment from "../ammentitiesfile";

function Ammentities() {
  const groupedItems = amment.reduce((acc, item) => {
    const { Heading, ...rest } = item;
    if (!acc[Heading]) {
      acc[Heading] = [];
    }
    acc[Heading].push(rest);

    return acc;
  }, {});

  const essentials = groupedItems["Essentials"];

  return (
    <div style={{ display: "flex" }}>
      {essentials.map((obj) => {
        return (
          <div >
            {" "}
            <input className="checkboxalign" type="checkbox" />
            <span>{obj.value}</span>
          </div>
        );
      })}
    </div>
  );
}
export default Ammentities;
