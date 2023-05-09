import React from "react";

import Login from "./login";
import { FaSearch } from "react-icons/fa";
import { useParams } from 'react-router-dom';

function Rooms() {

  const { id } = useParams();

  console.log(id);
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
      <div style={{marginTop:"20px"}}>   <Login /></div>
    
    </nav>

    <div>

    </div>
    </React.Fragment>
  );
}

export default Rooms;
