import React from 'react';
import './App.scss';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Boost from "./components/Boost/Boost";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Boost/>
    </BrowserRouter>
  )
};

export default App;