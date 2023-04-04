import React, { useState } from "react";
import { BsPlusCircle, BsDashCircle } from "react-icons/bs";

function Addguest(props) {
  const [adultcount, setadultcount] = useState(0);
  const [childrencount, setChildrenCount] = useState(0);
  const [infantcount, setinfantcount] = useState(0);
  const [petcount, setpetcount] = useState(0);



  function handleIncrease(countSetter, limit, memberType) {
    countSetter((count) => (count < limit ? count + 1 : count));

    props.onmemberAdd({
      Adultcount: memberType === "adult" ? adultcount + 1 : adultcount,
      Childrencount:memberType === "children" ? childrencount + 1 : childrencount,
      Infantcount:memberType==="infant"?infantcount+1:infantcount,
      Petcount:memberType==="pet"?petcount+1:petcount
    });
  }
  function handleDecrease(countSetter, limit, memberType) {
    countSetter((count) => (count > 0 ? count - 1 : count));

    props.onmemberAdd({
        Adultcount: memberType === "adult" ? adultcount -1  : adultcount,
        Childrencount:memberType === "children" ? childrencount - 1 : childrencount,
        Infantcount:memberType==="infant"?infantcount-1:infantcount,
        Petcount:memberType==="pet"?petcount-1:petcount
      });
  }
  return (
    <div className="container guestcontain">
      <div className="row guestcontain1">
        <div>
          <div>Adults </div>
          <span className="age">Age 13 or Above</span>
        </div>
        <div className="guestcontain2">
          <BsDashCircle
            onClick={() => handleDecrease(setadultcount, 10, "adult")}
          />{" "}
          <span>{adultcount}</span>{" "}
          <BsPlusCircle
            onClick={() => handleIncrease(setadultcount, 10, "adult")}
          />
        </div>
      </div>
      <hr />
      <div className="row guestcontain1">
        <div>
          <div>Children </div>
          <span className="age">Age 2 to 12</span>
        </div>
        <div className="guestcontain2">
          <BsDashCircle
            onClick={() => handleDecrease(setChildrenCount, 10, "children")}
          />{" "}
          <span>{childrencount}</span>{" "}
          <BsPlusCircle
            onClick={() => handleIncrease(setChildrenCount, 10, "children")}
          />
        </div>
      </div>
      <hr />
      <div className="row guestcontain1">
        <div>
          <div>Infants </div>
          <span className="age">Under 2</span>
        </div>
        <div className="guestcontain2">
          <BsDashCircle
            onClick={() => handleDecrease(setinfantcount, 10, "infant")}
          />{" "}
          <span>{infantcount}</span>{" "}
          <BsPlusCircle
            onClick={() => handleIncrease(setinfantcount, 10, "infant")}
          />
        </div>
      </div>
      <hr />
      <div className="row guestcontain1">
        <div>
          <div>Pets </div>
          <span className="age">Brining a Service Animal</span>
        </div>
        <div className="guestcontain2">
          <BsDashCircle
            onClick={() => handleDecrease(setpetcount, 10, "pet")}
          />{" "}
          <span>{petcount}</span>{" "}
          <BsPlusCircle
            onClick={() =>
              handleIncrease(() => setpetcount(petcount + 1), 10, "pet")
            }
          />
        </div>
      </div>
    </div>
  );
}
export default Addguest;
