import React from "react";

function NoofRooms() {
  return (
    <div style={{display:"flex", justifyContent:"space-between"}}>
      <div > 
        <button type="button" className="btn-dark buttondesign">
          <span aria-label="Any">Any</span>
        </button>
      </div>

      <div>
        <button type="button " className="buttondesign">
          <span aria-label="1">1</span>
        </button>
      </div>

      <div>
        <button type="button" className="buttondesign">
          <span aria-label="2">2</span>
        </button>
      </div>

      <div>
        <button type="button" className="buttondesign">
          <span aria-label="3">3</span>
        </button>
      </div>

      <div>
        <button type="button" className="buttondesign">
          <span aria-label="4">4</span>
        </button>
      </div>

      <div>
        <button type="button" className="buttondesign">
          <span aria-label="5">5</span>
        </button>
      </div>

      <div>
        <button type="button" className="buttondesign">
          <span aria-label="6">6</span>
        </button>
      </div>

      <div>
        <button type="button" className="buttondesign">
          <span aria-label="7">7</span>
        </button>
      </div>
      <div>
        <button type="button" className="buttondesign">
          <span aria-label="8+">8+</span>
        </button>
      </div>
    </div>
  );
}

export default NoofRooms;
