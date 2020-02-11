import React from "react";
import "./Header.scss";


const Header = () => {
  return (
    <header className="header">
      <div className="site-logo"/>
      <nav className="nav-wrapper">
        <ul className="nav">
          <li className="nav__item"><a href="#">HOME</a></li>
          <li className="nav__item"><a href="#">SERVICE</a></li>
          <li className="nav__item"><a href="#">ABOUT US</a></li>
          <li className="nav__item"><a href="#">PRICING TABLE</a></li>
          <li className="nav__item"><a href="#">HOW IT WORK</a></li>
          <li className="nav__item"><a href="#">HAPPY CLIENTS</a></li>
          <li className="nav__item"><a href="#">CONTACT US</a></li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;