import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';
import "./About.scss"


const About = () => {

  return (
    <ScrollableAnchor id="about">
      <section className="about">
        <div className="about__image"/>
        <div className="about__info">
          <h2 className="about__title">ABOUT US</h2>
          <p className="about__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
            It was popularised in the ore recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum
          </p>
          <div className="about__button">READ MORE</div>
        </div>
      </section>
    </ScrollableAnchor>
  )
};


export default About;