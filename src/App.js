import React from 'react';
import './App.scss';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Provider} from "react-redux";
import Header from "./components/Header/Header";
import Boost from "./components/Boost/Boost";
import store from './redux/store';
import Services from "./components/Services/Services";


const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Boost/>
        <Services/>
      </Provider>
    </BrowserRouter>
  )
};

export default App;