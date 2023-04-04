import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { Dialog } from "primereact/dialog";

function MainFilter() {
  const [visible, setVisible] = useState(false);
  return (
    <React.Fragment>
      <div
        className="mainFilter"
        onClick={() => {
          setVisible(true);
        }}
      >
        <FaFilter /> <span className="filtename">Filters</span>
      </div>

      <Dialog
        className="dialog"
        header="Filters"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <hr />
        <div className="PriceRange">
          <h2>Price Range</h2>
          <span> The average nightly price is $298</span>
          <div className="minmax">
            <div className="minmax1">
              {" "}
              <div>min price</div>
              <span>$</span>{" "}
              <input
                className="inputdesign"
                autoComplete="off"
                type="text"
                aria-describedby=""
                value="10"
              />
            </div>
            -
            <div className="minmax1">
              {" "}
              <div>max price</div>
              <span>$</span>{" "}
              <input
                className="inputdesign"
                autoComplete="off"
                type="text"
                aria-describedby=""
                value="750+"
              />
            </div>
          </div>
        </div>
        <hr />
        <h2>Type of Places</h2>
        <div className="placesfilter">
      
          <div style={{ display: "flex" }}>
            <div>
              <input className="checkboxalign" type="checkbox" />
            </div>
            <div>
              <div classname="filtertitle">Entire Place</div>
              <div className="placedesc"> A place all to yourself</div>
            </div>
          </div>


          <div style={{ display: "flex" }}>
            <div>
              <input  className="checkboxalign" type="checkbox" />
            </div>
            <div>
              <div classname="filtertitle">Private Room</div>
              <div className="placedesc"> Your own room in a home or a hotel, plus some shared common spaces</div>
            </div>
          </div>


          <div style={{ display: "flex" }}>
            <div>
              <input  className="checkboxalign" type="checkbox" />
            </div>
            <div>
              <div classname="filtertitle">Shared Room</div>
              <div className="placedesc">A sleeping space and common areas that may be shared with others</div>
            </div>
          </div>

        </div>
        <hr/>
      </Dialog>
    </React.Fragment>
  );
}

export default MainFilter;
