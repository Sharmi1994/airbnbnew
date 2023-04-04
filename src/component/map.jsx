import React from "react";

import images from "../mapimages";

function Map(props) {


  function handleEventChange(event) {
    props.onRegionChange(event.target.getAttribute("data-value"));
  }
  return (
    <div className="container text-center ">
      Search By Region
      <div className="row">
        <div className="col">
          <img
            src={images[0].src}
            className="mapimage"
            alt="mapimg.png"
            data-value={images[0].value}
            onClick={handleEventChange}
          />{" "}
          I am Flexible
        </div>
        <div className="col">
          <img
            src={images[1].src}
            className="mapimage"
            alt="mapimg.png"
            data-value={images[1].value}
            onClick={handleEventChange}
          />{" "}
          Carribean
        </div>
        <div className="col">
          <img
            src={images[2].src}
            className="mapimage"
            alt="mapimg.png"
            data-value={images[2].value}
            onClick={handleEventChange}
          />
          United States
        </div>
      </div>
      <div className="row secrow">
        <div className="col">
          <img
            src={images[3].src}
            className="mapimage"
            alt="mapimg.png"
            data-value={images[3].value}
            onClick={handleEventChange}
          />
          Europe
        </div>
        <div className="col">
          <img
            src={images[4].src}
            className="mapimage"
            alt="mapimg.png"
            data-value={images[4].value}
            onClick={handleEventChange}
          />
          Canada
        </div>
        <div className="col">
          <img
            src={images[5].src}
            className="mapimage"
            alt="mapimg.png"
            data-value={images[5].value}
            onClick={handleEventChange}
          />
          Australia
        </div>
      </div>
    </div>
  );
}

export default Map;
