import React from "react";
import { useLocation } from "react-router-dom";
import Login from "./login";
import { FaSearch } from "react-icons/fa";
import { useParams } from "react-router-dom";

function Rooms() {
  const { id } = useParams();
  const location = useLocation();
  const address = location.state?.Address;
  const name=location.state?.Name;
  const imgsrc=location.state?.Imgsrc;
  const distance=location.state?.Distance;
  const price=location.state?.Price

  return (
    <React.Fragment>
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <img
            className="img4"
            src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg"
            alt="img2.png"
          ></img>
        </div>
        <div>
          {" "}
          <button className="searchbutton">
            <div>Start Your Search</div>{" "}
            <div className="search-icon">
              <FaSearch />
            </div>
          </button>
        </div>
        <div style={{ marginTop: "20px" }}>
          {" "}
          <Login />
        </div>
      </nav>

      <div>
        {name}
        <div>
          <img
            className="stayimg"
            src={imgsrc}
            alt=""
          />
          <div>{address}</div>
          <div>{Math.ceil(distance/1000)}<span>KM</span></div>
          <div>{price.$numberDecimal}<span>USD</span></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Rooms;
