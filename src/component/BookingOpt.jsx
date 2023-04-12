import React, {  useState } from "react";

function Bookingopt() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleToggle1 = ()=>{
setIsChecked1(!isChecked1);
  }
  const handleToggle2 = ()=>{
    setIsChecked2(!isChecked2);
      }

  return (
    <div>
      <h2>Booking Options</h2>

      <div className="Bookopt">
        <div>
          <div>Instant Book</div>
          <div className="bookoptdesc">
            Listings you can book without waiting for Host approval
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
          <div>Self Check-in</div>
          <div className="bookoptdesc">
            Easy access to the property once you checkin
          </div>
        </div>
        <div className="sliding-button" onClick={handleToggle2}>
          <div className={`slider ${isChecked2 ? "checked" : ""}`}>
            {isChecked2 && <span className="tick-mark">&#10003;</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Bookingopt;
