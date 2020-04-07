import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor'
import "./Price.scss"


const Price = () => {
  return (
    <ScrollableAnchor id="price">
      <section className="choose-price">
        <h2 className="choose-price__title">CHOOSE YOUR PRICE</h2>
        <h4 className="choose-price__title-2">Lorem Ipsum is simply dummy text of the printing typesetting.</h4>
        <div className="price-plans">
          <div className="basic-plan">
            <PlanInfo name={"BASIC PLAN"}
                      price={22}
                      accounts={"1 ACCOUNT"}
                      support={"8 HOURS SUPPORT"}
            />
          </div>
          <div className="premium-plan">
            <PlanInfo name={"PREMIUM PLAN"}
                      price={42}
                      accounts={"8 ACCOUNTS"}
                      support={"100MB STORAGE"}
            />
          </div>
          <div className="gold-plan">
            <PlanInfo name={"GOLD PLAN"}
                      price={62}
                      accounts={"8 ACCOUNTS"}
                      support={"24 HOURS SUPPORT"}
            />
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  )
};


const PlanInfo = (props) => {
  return (
    <div className="plan__info">
      <div className="plan__name">{props.name}</div>
      <div className="plan__price">
        <div className="plan__price-symbol">$</div>
        <div className="plan__price-amount">{props.price}</div>
      </div>
      <div className="plan__per-month">per month</div>
      <div className="plan__accounts">{props.accounts}</div>
      <div className="plan__support">{props.support}</div>
      <div className="plan__cloud">CUSTOM CLOUD SERVICES</div>
      <div className="plan__button">GET STARTED</div>
    </div>
  )
};


export default Price;