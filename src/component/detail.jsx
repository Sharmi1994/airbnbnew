import React, { useState, useRef } from "react";

import { FaSearch } from "react-icons/fa";
import { Calendar } from "primereact/calendar";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import moment from "moment";
import { OverlayPanel } from "primereact/overlaypanel";
import Map from "./map";

import Addguest from "./addguest";
function Detail(props) {
  const op = useRef(null);
  const ope = useRef(null);
  const [date1, setDate1] = useState(null);
  const [date2, setDate2] = useState(null);
  const [guestValue, setGuestValue] = useState("");
 
  const [selectregion, setselectregion] = useState("");
  const currentDate = moment();

  //add the guest count
  function handleGuest(value) {
    setGuestValue(
      `${value.Adultcount} adults, ${value.Childrencount} children, ${value.Infantcount} infants, ${value.Petcount} pets`
    );
  }

  //set region
  async function handleRegionChange(value) {
    setselectregion(value);
    
    op?.current?.toggle(value);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    //check whether the check in and checkout date is correct
     if (moment(date2).isBefore(date1)) {
      alert("checkout date cannot be before checkin date");
    } else {
      props.handleCallBack({ selectregion, date1, date2, guestValue });
    }
  }

  return (
    <div>
      <div className=" row details">
        {" "}
        <div>Stays</div>
        <div>Experiences</div>
        <div>Online Experiences</div>
      </div>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div className="row search2">
          <div>
            <div> Where</div>
            <div>
              {" "}
              <input
                className="inputdesign"
                type="text"
                placeholder="Search Destinations"
                value={selectregion}
                onChange={function (event) {
                  setselectregion(event.target.value);
                }}
                onClick={(e) => {
                  e.preventDefault();
                  op?.current?.toggle(e);
                }}
              />
             
                <OverlayPanel ref={op}>
                  <Map onRegionChange={handleRegionChange} />
                </OverlayPanel>
           
            </div>
          </div>

          <div>
            Check In
            <div className="card flex justify-content-center calendar">
              <Calendar
                value={date1}
                className="custom-calendar"
                placeholder="Add Dates"
                minDate={currentDate.toDate()}
                onChange={(e) => setDate1(e.value)}
              />
            </div>
          </div>

          <div>
            Check Out
            <div className="card flex justify-content-center">
              <Calendar
                value={date2}
                className="custom-calendar"
                placeholder="Add Dates"
                minDate={currentDate.toDate()}
                onChange={(e) => setDate2(e.value)}
              />
            </div>
          </div>

          <div>
            <div>Who</div>
            <input
              className="inputdesign"
              type="text"
              placeholder="Add Guests"
              value={guestValue}
              onClick={(e) => {
                ope.current.toggle(e);
              }}
            />
            <OverlayPanel ref={ope}>
              <Addguest onmemberAdd={handleGuest} />
            </OverlayPanel>
          </div>

          <button className="btn-lg btn-danger" type="submit">
            {" "}
            Search <FaSearch />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Detail;
