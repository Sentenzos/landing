import React, {useMemo, useRef, useState} from 'react';
import {Provider} from "react-redux";
import Header from "./components/Header/Header";
import Boost from "./components/Boost/Boost";
import store from './redux/store';
import Services from "./components/Services/Services";
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import About from "./components/About/About";
import Price from "./components/Price/Price";
import How from "./components/How/How";
import Happy from "./components/Happy/Happy";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import img1 from "./assets/img/laptop1.png";
import img2 from "./assets/img/laptop2.png";
import img3 from "./assets/img/laptop3.png";
import './App.scss';
import '../src/assets/responsive.scss';

library.add(fab, fas, far);


const App = () => {

  const [button, setButton] = useState(0);
  const buttons = useMemo(() => [0, 1, 2], []);
  const images = useMemo(() => [img1, img2, img3], []);
  const [animationState, toggleAnimationState] = useState(true);
  const laptopElem = useRef(null);

  const changeImage = () => {
    //без setTimeout элемент с картинкой не успевает размонтироваться в момент exited
    setTimeout(() => {
      toggleAnimationState(true);
      laptopElem.current.style.backgroundImage = `url(${images[button]})`
    }, 0);
  };

  return (
    <Provider store={store}>
      <Header/>
      <Boost forRef={laptopElem}
             aniState={animationState}
             changeImage={changeImage}
      />
      <Services buttons={buttons}
                button={button}
                setButton={setButton}
                toggleAniState={toggleAnimationState}
      />
      <About/>
      <Price/>
      <How/>
      <Happy/>
      <Newsletter/>
      <Footer/>
    </Provider>
  )
};

export default App;