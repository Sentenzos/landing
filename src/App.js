import React from 'react';
import './App.scss';
import {BrowserRouter, Switch, Route} from "react-router-dom";
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


library.add(fab, fas, far);


const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Boost/>
        <Services/>
        <About/>
        <Price/>
        <How/>
        <Happy/>
        <Newsletter/>
        <Footer/>
      </Provider>
    </BrowserRouter>
  )
};

export default App;