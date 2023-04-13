import React, { useState } from "react";

function TopTier() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  function handleToggle1() {
    setIsChecked1(!isChecked1);
  }
  function handleToggle2() {
    setIsChecked2(!isChecked2);
  }
  function handleToggle3() {
    setIsChecked3(!isChecked3);
  }
  return (
    <div>
      <div className="Bookopt">
        <div>
          <div>Super Host</div>
          <div className="bookoptdesc">Stay with recognized Host</div>
          <div>
            <a
              style={{ color: "black", fontSize: "0.75rem" , textDecoration:"underline"}}
              href="https://www.airbnb.com/d/superhost"
            >
              {" "}
              Learn More
            </a>
          </div>
        </div>
        <div className="sliding-button" onClick={handleToggle1}>
          <div className={`slider ${isChecked1 ? "checked" : ""}`}>
            {isChecked1 && <span className="tick-mark">&#10003;</span>}
          </div>
        </div>
      </div>

      <div className="Bookopt">
        <div>
          <div>Airbnb Plus</div>
          <div className="bookoptdesc">
            Every Plus home is reviewed for quality
          </div>
        </div>
        <div className="sliding-button" onClick={handleToggle2}>
          <div className={`slider ${isChecked2 ? "checked" : ""}`}>
            {isChecked2 && <span className="tick-mark">&#10003;</span>}
          </div>
        </div>
      </div>

      <div className="Bookopt">
        <div>
          <div>Airbnb Luxe</div>
          <div className="bookoptdesc">
            Hand picked Luxury home with personally arranged services
          </div>
        </div>
        <div className="sliding-button" onClick={handleToggle3}>
          <div className={`slider ${isChecked2 ? "checked" : ""}`}>
            {isChecked3 && <span className="tick-mark">&#10003;</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopTier;
