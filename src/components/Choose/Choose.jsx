import React from "react";
import "./Choose.scss";


const Choose = () => {
  return (
    <div className="choose-price">
      <h2 className="choose-price__title">CHOOSE YOUR PRICE</h2>
      <h4 className="choose-price__title-2">Lorem Ipsum is simply dummy text of the printing typesetting.</h4>
      <div className="price-plans">
        <div className="basic-plan">
          <div className="plan__info">
            <div className="plan__title">BASIC PLAN</div>
            <div className="plan__price">
              <div className="plan__price-symbol">$</div>
              <div className="plan__price-amount">22</div>
            </div>
            <div className="plan__per-month">PER MONTH</div>
            <div className="plan__accounts">1 ACCOUNT</div>
            <div className="plan__support">8 HOURS SUPPORT</div>
            <div className="plan__cloud">CUSTOM CLOUD SERVICES</div>
            <div className="plan__button">GET STARTED</div>
          </div>
        </div>
        <div className="premium-plan"></div>
        <div className="gold-plan"></div>
      </div>
    </div>
  )
};

export default Choose;