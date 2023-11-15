import React from "react";
import FcGoogle from "react-icons/fc";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Template = ({ title, desc1, desc2, formtype, image, setLoggedIn }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>
        {formtype==="signup"?(<Login/>):(<Signup/>)}
      </div>
      <div>
      <div></div>
      <div>OR</div>
      <div></div>
      </div>
      <button></button>
    </div>
  );
};

export default Template;
