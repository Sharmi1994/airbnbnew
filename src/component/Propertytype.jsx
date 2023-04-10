import React from "react";

function PropertyType() {
  return (
    <div style={{display:"flex", justifyContent:"space-between"}}>
      <div className="propetytypediv">
        <button className="buttondecors">
          <div>
            <div>
              <img  src="https://a0.muscache.com/pictures/4d7580e1-4ab2-4d26-a3d6-97f9555ba8f9.jpg" alt=" propertyimg.png"/>
            </div>
            <div>House</div>
          </div>
        </button>
      </div>

      <div className="propetytypediv">
        <button className="buttondecors">
          <div>
            <div>
              <img  src="https://a0.muscache.com/pictures/21cfc7c9-5457-494d-9779-7b0c21d81a25.jpg" alt=" propertyimg.png"/>
            </div>
            <div>Apartment</div>
          </div>
        </button>
      </div>

      <div className="propetytypediv">
        <button className="buttondecors">
          <div>
            <div>
              <img  src="https://a0.muscache.com/pictures/6f261426-2e47-4c91-8b1a-7a847da2b21b.jpg" alt=" propertyimg.png"/>
            </div>
            <div>GuestHouse</div>
          </div>
        </button>
      </div>

      <div className="propetytypediv">
        <button className="buttondecors">
          <div>
            <div>
              <img  src="https://a0.muscache.com/pictures/64b27fed-56a1-4f03-950a-d8da08efb428.jpg" alt=" propertyimg.png"/>
            </div>
            <div>Hotel</div>
          </div>
        </button>
      </div>


    </div>
  );
}

export default PropertyType;
