import React from "react";
import {Field, reduxForm} from "redux-form/lib/index";
import {Input} from "../../common/FormControl/FormControl";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const BoostForm = () => {
  return (
    <div className="boost__form-wrapper">
      <form className="boost__form">
        <Field className="form__full-name"
               type={"text"}
               name={"fullName"}
               component={Input}
               placeholder={"Full Name"}
               wrapperClassName={"form__full-name-wrapper"}
               awesomeicon={<FontAwesomeIcon icon="user" color="#6e6e6e"/>}
        />
        <Field className="form__email"
               type={"email"}
               name={"email"}
               component={Input}
               placeholder={"Email Address"}
               wrapperClassName={"form__email-wrapper"}
               awesomeicon={<FontAwesomeIcon icon="envelope" color="#6e6e6e"/>}
        />
        <Field className="form__phone-number"
               type={"text"}
               name={"phoneNumber"}
               component={Input}
               placeholder={"Phone Number"}
               wrapperClassName={"form__phone-number-wrapper"}
               awesomeicon={<FontAwesomeIcon icon="phone-alt" color="#6e6e6e"/>}
        />
        <label className="form__button-wrapper">
          REQUEST A QUOTE
          <button className="form__button"/>
        </label>
      </form>
    </div>
  )
};


export default reduxForm({
  form: "boostForm"
})(BoostForm);