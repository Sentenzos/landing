import React from "react";
import "./How.scss";


const How = () => {

  return (
    <div className="how-it-works">
      <h1 className="how-it-works__title">HOW IT WORKS</h1>
      <h4 className="how-it-works__title-2">Lorem Ipsum is simply dummy Business industry</h4>
      <div className="steps">
        <div className="step">
          <div className="step__image-wrapper">
            <div className="step__image image-1"/>
            <div className="step__arrow arrow-1"/>
          </div>
          <div className="step__name">STEP 1</div>
          <div className="step__description">Lorem Ipsum is simply dummy text of the printing and typesetting ind
            ustry. Lorem Ipsum has been
          </div>
        </div>
        <div className="step">
          <div className="step__image-wrapper">
            <div className="step__image image-2"/>
            <div className="step__arrow arrow-2"/>
          </div>
          <div className="step__name">STEP 2</div>
          <div className="step__description">Lorem Ipsum is simply dummy text of the printing and typesetting ind
            ustry. Lorem Ipsum has been
          </div>
        </div>
        <div className="step">
          <div className="step__image-wrapper">
            <div className="step__image image-3"/>
            <div className="step__arrow arrow-3"/>
          </div>
          <div className="step__name">STEP 3</div>
          <div className="step__description">Lorem Ipsum is simply dummy text of the printing and typesetting ind
            ustry. Lorem Ipsum has been
          </div>
        </div>
        <div className="step">
          <div className="step__image-wrapper">
            <div className="step__image image-4"/>
          </div>
          <div className="step__name">STEP 4</div>
          <div className="step__description">Lorem Ipsum is simply dummy text of the printing and typesetting ind
            ustry. Lorem Ipsum has been
          </div>
        </div>
      </div>
      <div className="get-start-button">GET START NOW</div>
    </div>
  )
};


export default How;