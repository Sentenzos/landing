import React from "react";
import "./Boost.scss";
import BoostForm from "./BoostForm";


const Boost = () => {

  return (
    <div className="boost">
      <h1 className="local-business">BOOST UP YOUR LOCAL BUSINESS</h1>
      <h4 className="local-business-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum typesetting</h4>
      <BoostForm/>
      <div className="laptop-wrapper">
        <div className="laptop"/>
      </div>
    </div>
  )
};


export default Boost;