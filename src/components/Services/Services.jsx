import React from "react";
import cn from "classnames";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ScrollableAnchor from 'react-scrollable-anchor'
import "./Services.scss"


const Services = (props) => {

  //переключает кнопки и активирует состояние exiting в Transition
  const handleClick = (button) => {
    if (props.button === button) return;
    props.setButton(button);
    props.toggleAniState(false);
  };

  return (
    <section className="services">
      <div className="switch-buttons">
        {
          props.buttons.map(b => {
            return <div key={b} className={cn("switch-button", b === props.button && "switch-button--selected")}
                        onClick={() => handleClick(b)}
            />
          })
        }
      </div>
      <ScrollableAnchor id="services">
        <h2 className="services__title">OUR SERVICES</h2>
      </ScrollableAnchor>
      <h4 className="services__title-2">Lorem Ipsum is simply dummy Business industry.</h4>
      <div className="services__services-items">
        <div className="services-item">
          <div className="services-item__img"><FontAwesomeIcon icon="clock"/></div>
          <div className="services-item__info-wrapper">
            <h5 className="services-item__title">Font-Awesome Icons</h5>
            <div className="services-item__text">Lorem Ipsum is simply dummy text of the printing and typesetting ind
              ustry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer.
            </div>
          </div>
        </div>
        <div className="services-item right">
          <div className="services-item__img"><FontAwesomeIcon icon="cog"/></div>
          <div className="services-item__info-wrapper">
            <h5 className="services-item__title">Fully Responsive Design</h5>
            <div className="services-item__text">Many desktop publishing packages and web page editors now use Lorem
              Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
              their infancy
            </div>
          </div>
        </div>
        <div className="services-item">
          <div className="services-item__img"><FontAwesomeIcon icon="graduation-cap"/></div>
          <div className="services-item__info-wrapper">
            <h5 className="services-item__title">Working Contact form</h5>
            <div className="services-item__text">Many desktop publishing packages and web page editors now use Lorem
              Ipsum as their default model text, and a search for 'lorem ipsum' will un
              cover many web sites still in their infancy
            </div>
          </div>
        </div>
        <div className="services-item right">
          <div className="services-item__img"><FontAwesomeIcon icon="rocket"/></div>
          <div className="services-item__info-wrapper">
            <h5 className="services-item__title">Retina Ready icons here</h5>
            <div className="services-item__text">There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected humour
              or randomised words which don't look even slightly believable.
            </div>
          </div>
        </div>
        <div className="services-item">
          <div className="services-item__img"><FontAwesomeIcon icon="baseball-ball"/></div>
          <div className="services-item__info-wrapper">
            <h5 className="services-item__title">Friendly Code</h5>
            <div className="services-item__text">Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914 translation by H. Rackham
            </div>
          </div>
        </div>
        <div className="services-item right">
          <div className="services-item__img"><FontAwesomeIcon icon="dollar-sign"/></div>
          <div className="services-item__info-wrapper">
            <h5 className="services-item__title">Flat trendy landing page Design</h5>
            <div className="services-item__text">Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Services;