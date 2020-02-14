import React from "react";
import "./Happy.scss";


const Happy = () => {
  return (
    <div className="happy-clients">
      <h1 className="happy-clients__title-1">HAPPY CLIENTS</h1>
      <h4 className="happy-clients__title-2">We are explain who are using our business solutions</h4>
      <div className="quotes">
        <div className="quota">
          <div className="quota__quota">
            <span className=""></span>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
            standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled
            it to make.
            <span></span>
          </div>
        </div>
        <div className="quota">
          2
        </div>
        <div className="quota">
          3
        </div>
        <div className="quota">
          4
        </div>
      </div>
    </div>
  )
};

export default Happy;