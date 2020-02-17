import React from "react";
import "./Newsletter.scss";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormControl/FormControl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import NewsletterForm from "./NewsletterForm";


const Newsletter = () => {

  return (
    <div className="newsletter">
      <h1 className="newsletter__title-1">NEWSLETTER</h1>
      <h4 className="newsletter__title-2">Lorem Ipsum is simply dummy Business industry</h4>
      <NewsletterForm/>
      <div className="dotted-map">
        <div className="bubble">
          <div className="bubble__title">ADDRESS</div>
          <div className="bubble__address">
            Business street <br/>
            Second north section <br/>
            Bavani nagar. 88769 <br/>
            Call : +987-9976-999 <br/>
            <a className="bubble__email" href="mailto:info@businessface.com">info@businessface.com</a>
          </div>
        </div>
        <div className="site-logo-2"/>
      </div>
      <hr className="dividing-line"/>
      <div className="bottom-nav-wrapper">
        <ul className="bottom-nav">
          <li className="bottom-nav__item"><a href="#">HOME</a></li>
          <li className="bottom-nav__item"><a href="#">SERVICE</a></li>
          <li className="bottom-nav__item"><a href="#">ABOUT US</a></li>
          <li className="bottom-nav__item"><a href="#">PRICING TABLE</a></li>
          <li className="bottom-nav__item"><a href="#">HOW IT WORK</a></li>
          <li className="bottom-nav__item"><a href="#">HAPPY CLIENTS</a></li>
          <li className="bottom-nav__item"><a href="#">CONTACT US</a></li>
        </ul>
      </div>
      <a href="tel:+9879976999" className="bottom-phone">
        <span className="bottom-phone__icon"><FontAwesomeIcon icon="phone-alt"/>     </span>
        +987 9976 999
      </a>
    </div>
  )
};



export default Newsletter;