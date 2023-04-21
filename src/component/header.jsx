import React, { useState } from "react";

import { Dialog } from "primereact/dialog";
function Header() {
  const [visible, setVisible] = useState(false);

  return (
    <React.Fragment>
      <div className="heading" >
        {" "}
        <h3 className="header">Show total prices up front </h3>{" "}
        <span
          className="topop"
          onClick={() => {
            setVisible(true);
          }}
        >
          Learn More
        </span>
        <Dialog
          header="Header"
          visible={visible}
          style={{ width: "50vw" }}
          onHide={() => setVisible(false)}
         
        >
          <div className="row popup1">
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
              <span className="later" onClick={()=>{
                setVisible(false);
              }}> May be later</span>
            </div>
          </div>
          <div className="row popup1">
            <img
              className="img1"
              src="https://a0.muscache.com/im/pictures/8b55746d-e6a2-4871-9a41-b7bd83acc6a0.jpg"
              alt="img.png"
            ></img>
          </div>
        </Dialog>
      </div>
    </React.Fragment>
  );
}

export default Header;
