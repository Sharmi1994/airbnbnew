import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

function Popupdiv() {
  const [close, setClose] = useState(true);
  function handleClose() {
    setClose(!close);
  }

  return (
    <div
      className="popup container"
      style={{ display: close ? "flex" : "none" }}
    >
      <div className="row popup1">
        <div className="col-sm crossicon">
          {" "}
          <button className="roundicon" onClick={handleClose}>
            {" "}
            <FaTimes />{" "}
          </button>
        </div>
        <div className="col-sm popupcontent">
          {" "}
          <img
            className="img2"
            src="https://a0.muscache.com/im/pictures/733f04b1-2954-4e1c-a000-8804d2cc552d.jpg?im_q=highq&amp;im_w=1200"
            alt="img1.png"
          ></img>
          <p className="popupprice"> One total price, up front</p>
          <p>
            You can now see the total price up front, including all fees,
            beforetaxes
          </p>
          <button type="submit" className="btn-lg btn-dark">
            Try it Now
          </button>
          <br></br>
          <span className="later" onClick={handleClose}>
            {" "}
            May be later
          </span>
        </div>
      </div>
      <div className="row popup1">
        <img
          className="img1"
          src="https://a0.muscache.com/im/pictures/8b55746d-e6a2-4871-9a41-b7bd83acc6a0.jpg"
          alt="img.png"
        ></img>
      </div>
    </div>
  );
}

export default Popupdiv;
