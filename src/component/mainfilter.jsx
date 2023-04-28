import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { Dialog } from "primereact/dialog";
import NoofRooms from "./count";
import PropertyType from "./Propertytype";
import Ammentities from "./ammentities";
import Bookingopt from "./BookingOpt";

import Accessible from "./accessible";
import TopTier from "./toptier";

import roomType from "../roomtype";

import HostLangs from "./HostLangs";
function MainFilter(props) {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState();

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // total no of stays
  useEffect(() => {
    setData(props.Datas);
  }, [props.Datas]);

  function handleStayDetails() {
    props.handleCallback({ minPrice, maxPrice });
  }

  const footerContent = (
    <div className="footerspace">
      <div>
        <span style={{ textDecoration: "underline" }}>Clear All</span>
      </div>
      <div>
        <button
          type="submit"
          onClick={handleStayDetails}
          label="show no of days"
          className="btn-lg btn-dark"
        >
          Show {data} Stays
        </button>
      </div>
    </div>
  );
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
        footer={footerContent}
      >
        <hr />
        {/* Price Range */}
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
                placeholder="10"
                onChange={function (event) {
                  setMinPrice(event.target.value);
                  console.log(minPrice);
                }}
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
                placeholder="750+"
                onChange={function (event) {
                  setMaxPrice(event.target.value);
                  console.log(maxPrice);
                }}
              />
            </div>
          </div>
        </div>
        <hr />
        {/* Types of place */}
        <h2 className="filterheading">Type of Places</h2>
        <div className="placesfilter">

        {roomType.map((obj)=>{
          return (<div style={{ display: "flex" }}>
            <div>
              <input className="checkboxalign" type="checkbox" />
            </div>
            <div>
              <div classname="filtertitle"><h3>{obj.value}</h3></div>
              <div className="placedesc"> {obj.Desc}</div>
            </div>
          </div>)
        })}
          
        </div>
        <hr />

        {/* rooms and bed  */}
        <div className="Rooms and bed">
          <h2>Rooms and Bed</h2>
          <div className="rooms">
            <h3>Bedroom</h3> <NoofRooms />
          </div>
          <div className="rooms">
            <h3>Bed</h3>
            <NoofRooms />
          </div>
          <div className="rooms">
            <h3>Bathroom</h3>
            <NoofRooms />
          </div>
        </div>
        <hr />

        {/* property type */}
        <div>
          <h2> Property Type</h2> <PropertyType />
        </div>
        <hr />

        {/* Ammentities */}
        <div>
          <h2>Ammentities</h2>

          <div>
            <Ammentities />
          </div>
        </div>
        <hr />

        <div>
          <Bookingopt />
        </div>
        <hr />
        {/* Accessibility feature */}

        <div>
          <h2>Accessibility Features</h2>
          <h3 className="bookoptdesc">
            This info was provided by the Host and reviewed by Airbnb
          </h3>

          <div>
            <Accessible />
          </div>
        </div>
        <hr />

        <div>
          <h2>Top Tier Stay</h2>
          <h3 className="bookoptdesc">
            This info was provided by the Host and reviewed by Airbnb
          </h3>

          <div>
            <TopTier />
          </div>
        </div>
        <hr />
        {/* Host Lamguage */}
        <div>
          <HostLangs />
        </div>
      </Dialog>
    </React.Fragment>
  );
}

export default MainFilter;
