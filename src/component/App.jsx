import React from "react";

import Header from "./header";
import Footer from "./footer";
import Navbar from "./Navbar";

import FilterCarousel from "./Filternav";
import MainFilter from "./mainfilter";



function App() {
  return (
    <div>
      <Header />
      <hr />
      <Navbar />
      <hr />
      <div className="filterdiv">
        <div className="col" style={{ display: "flex" }}>
          <FilterCarousel />
        </div>{" "}
        <div className="col"><MainFilter/></div>
      </div>

      <hr />


      <Footer />
    </div>
  );
}
export default App;
