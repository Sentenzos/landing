import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import NewsletterForm from "./NewsletterForm";
import ScrollableAnchor from 'react-scrollable-anchor';


const Newsletter = () => {

  return (
    <ScrollableAnchor id="newsletter">
      <section className="newsletter">
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
        <ul className="bottom-nav">
          <li className="bottom-nav__item"><a href="#header">HOME</a></li>
          <li className="bottom-nav__item"><a href="#services">SERVICE</a></li>
          <li className="bottom-nav__item"><a href="#about">ABOUT US</a></li>
          <li className="bottom-nav__item"><a href="#price">PRICING TABLE</a></li>
          <li className="bottom-nav__item"><a href="#how-it-works">HOW IT WORK</a></li>
          <li className="bottom-nav__item"><a href="#happy-clients">HAPPY CLIENTS</a></li>
          <li className="bottom-nav__item"><a href="#newsletter">CONTACT US</a></li>
        </ul>
        <a href="tel:+9879976999" className="bottom-phone">
          <span className="bottom-phone__icon"><FontAwesomeIcon icon="phone-alt"/>     </span>
          +987 9976 999
        </a>
        <div className="social-networks">
          <a className="social-network" href="https://www.twitter.com/"><FontAwesomeIcon icon={["fab", "twitter"]}
                                                                                         color="#ffc155"/></a>
          <a className="social-network" href="https://www.facebook.com/"><FontAwesomeIcon icon={["fab", "facebook-f"]}/></a>
          <a className="social-network" href="https://plus.google.com"><FontAwesomeIcon
            icon={["fab", "google-plus-g"]}/></a>
          <a className="social-network" href="https://www.linkedin.com"><FontAwesomeIcon icon={["fab", "linkedin-in"]}/></a>
        </div>
      </section>
    </ScrollableAnchor>
  )
};


export default Newsletter;