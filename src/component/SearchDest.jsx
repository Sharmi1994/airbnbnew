import React, { useRef ,useState}  from "react";

import { OverlayPanel } from "primereact/overlaypanel";
import Map from "./map";

function SearctDest() {
  const op = useRef(null);
  const[region,setregion]=useState(true);

  const[selectregion, setselectregion]=useState("")
  function handleRegionChange(value) {

setselectregion(value);
setregion(false);
  }

  return (
    <div>
      {" "}
      <input
        className="inputdesign"
        type="text"
        placeholder="Search Destinations"
        value={selectregion}
        onClick={(e) => {
          op.current.toggle(e);
        }}
      />
      {region&& ( <OverlayPanel ref={op}>
        <Map onRegionChange={handleRegionChange} />
      </OverlayPanel>)}
     
    </div>
  );
}

export default SearctDest;
