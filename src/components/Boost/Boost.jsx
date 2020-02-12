import React, {useState} from "react";
import "./Boost.scss";
import BoostForm from "./BoostForm";
import cn from "classnames";


const Boost = () => {
  const [state, setState] = useState(1);
  const buttons = [1, 2, 3];

  return (
    <div className="boost">
      <h1 className="local-business">BOOST UP YOUR LOCAL BUSINESS</h1>
      <h4 className="local-business-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum typesetting</h4>
      <BoostForm />
      <div className="laptop-wrapper">
        <div className="laptop"/>
      </div>
      <div className="switch-buttons">
        {
          buttons.map(b => {
            return <div key={b} className={cn("switch-button", b === state && "switch-button--selected")} onClick={()=>setState(b)} />
          })
        }
      </div>
    </div>
  )
};


export default Boost;