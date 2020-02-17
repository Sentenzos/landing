import {Field, reduxForm} from "redux-form";
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Input} from "../../common/FormControl/FormControl";


let NewsletterForm = (props) => {
  return (
    <div className="newsletter__subscribe">
      <form className="subscribe-form">
        <Field className="subscribe__name"
               type={"text"}
               name={"name"}
               component={Input}
               placeholder={"Name"}
               wrapperClassName={"subscribe__name-wrapper"}
               awesomeicon={<FontAwesomeIcon icon="user" color="#6e6e6e"/>}
        />
        <Field className="subscribe__email"
               type={"email"}
               name={"email"}
               component={Input}
               placeholder={"Email Address"}
               wrapperClassName={"subscribe__email-wrapper"}
               awesomeicon={<FontAwesomeIcon icon="envelope" color="#6e6e6e"/>}
        />
        <label className="subscribe__button-wrapper">
          SUBSCRIBE NOW
          <button className="subscribe__button"/>
        </label>
      </form>
    </div>
  )
};

export default reduxForm({
  form: "newsletter"
})(NewsletterForm);