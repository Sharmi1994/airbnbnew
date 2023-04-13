
import React, { useState } from "react";
import HostLang from "../hostLang";

function HostLangs() {
  const [spanText, setSpantext] = useState("ShowMore");
const [numtoShow, setnumtoShow]=useState(Math.ceil(HostLang.length/2));

  function handleClick() {
    setSpantext(spanText === "ShowMore" ? "ShowLess" : "ShowMore");
    setnumtoShow(numtoShow===(HostLang.length/2)?(HostLang.length): (HostLang.length/2));
  }
  return (
    <div>
      <h3>Host Language</h3>
      <div className="amenty">
        {HostLang.slice(0,numtoShow).map((obj,index) => {
          return (
            <div key={index} style={{ display: "flex" }}>
              <input className="checkboxalign" type="checkbox" />
              <span style={{ fontSize: "0.95rem" }}>{obj.value}</span>
            </div>
          );
        })}
      </div>

      <span  style={{textDecoration:"underline"}} onClick={handleClick}>{spanText}</span>
    </div>
  );
}

export default HostLangs;
