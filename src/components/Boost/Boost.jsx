import React, {useEffect, useState} from "react";
import BoostForm from "./BoostForm";
import {Transition} from "react-transition-group";
import "./Boost.scss"


const Boost = (props) => {

  const [windowWidth, setWindowWidth] = useState(null);

  const defaultStyle = {
    transition: `margin-left 300ms, opacity 300ms`
  };

  const transitionStyles = {
    entering: {
      marginLeft: -windowWidth / 2 + "px",
      opacity: 0
    },
    entered: {
      marginLeft: 0,
      opacity: 1
    },
    exiting: {
      marginLeft: windowWidth / 2 + "px",
      opacity: 0
    },
    exited: {
      marginLeft: windowWidth / 2 + "px",
      opacity: 0
    },
  };

  useEffect(() => {
    const calculateSize = () => {
      setWindowWidth(document.documentElement.clientWidth);
    };

    calculateSize();
    window.addEventListener('resize', calculateSize);

    return () => {
      window.removeEventListener('resize', calculateSize);
    }
  }, []);


  return (
    <section className="boost">
      <h1 className="local-business">BOOST UP YOUR LOCAL BUSINESS</h1>
      <h4 className="local-business-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum typesetting</h4>
      <BoostForm/>
      <div className="laptop-wrapper">
        {/*Элемент вмонтирован по умолчанию из-за aniState=true.*/}
        {/*Запуск анимации исчезновения происходит при нажатии на одну из кнопок в компоненте Services. Они переключают aniState на false.*/}
        {/*В этот момент начинается стадия exiting. В момент ее завершения происходит событие onExited,*/}
        {/*и срабатывает обработчик changeImage, меняющий aniState обратно на true и запускающий стадия появления - entering.*/}
        <Transition in={props.aniState} timeout={300} unmountOnExit={true} onExited={props.changeImage}>
          {
            state => {
              return (
                <div className="laptop" ref={props.forRef} style={{
                  ...defaultStyle,
                  ...transitionStyles[state]
                }}/>
              )
            }
          }
        </Transition>
      </div>

    </section>
  )
};


export default Boost;