import React, {useEffect, useRef} from "react";
import "./Happy.scss";
import photo1 from "../../assets/img/photo-1.png"
import photo2 from "../../assets/img/photo-2.png"
import photo3 from "../../assets/img/photo-3.png"
import photo4 from "../../assets/img/photo-4.png"
import ScrollableAnchor from 'react-scrollable-anchor';


const Happy = () => {
  return (
    <ScrollableAnchor id="happy-clients">
      <section className="happy-clients">
        <h1 className="happy-clients__title-1">HAPPY CLIENTS</h1>
        <h4 className="happy-clients__title-2">We are explain who are using our business solutions</h4>
        <div className="quotes">
          <Quote name="DARVIN MICKLE" position="PROJECT MANAGER" photo={photo1}/>
          <Quote name="MADAM ELIZABETH" position="CREATIVE DIRECTOR" photo={photo2}/>
          <Quote name="CLIPS ARTER" position="LIPSUM DIRECTOR" photo={photo3}/>
          <Quote name="ZAM CHRISTOPHER" position="MANAGER" photo={photo4}/>
        </div>
      </section>
    </ScrollableAnchor>
  )
};


const Quote = (props) => {

  const photo = useRef(null);

  useEffect(() => {
    photo.current.style.backgroundImage = `url(${props.photo})`
  }, []);

  return (
    <div className="quote-info">
      <div className="quote-avatar" ref={photo}/>
      <div className="quote-wrapper">
        <span className="quote-hooks-1">“  </span>
        <div className="quote">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
          standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled
          it to make.<span className="quote-hooks-2">  „</span>
          <div className="quote-owner">
            <span className="quote-owner__name">{props.name},</span> {props.position}
          </div>
        </div>
      </div>
    </div>
  )
};


export default Happy;