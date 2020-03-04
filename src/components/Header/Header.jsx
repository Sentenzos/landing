import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';


const Header = () => {
  return (
    <ScrollableAnchor id="header">
      <header className="header">
        <div className="site-logo"/>
        <nav className="top-nav-wrapper">
          <ul className="top-nav">
            <li className="top-nav__item"><a href="#header">HOME</a></li>
            <li className="top-nav__item"><a href="#services">SERVICE</a></li>
            <li className="top-nav__item"><a href="#about">ABOUT US</a></li>
            <li className="top-nav__item"><a href="#price">PRICING TABLE</a></li>
            <li className="top-nav__item"><a href="#how-it-works">HOW IT WORK</a></li>
            <li className="top-nav__item"><a href="#happy-clients">HAPPY CLIENTS</a></li>
            <li className="top-nav__item"><a href="#newsletter">CONTACT US</a></li>
          </ul>
        </nav>
      </header>
    </ScrollableAnchor>
  )
};

export default Header;