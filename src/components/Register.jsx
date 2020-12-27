import React from "react";
import Input from "./Input";

const Register = (props) => {
    return (
        <div className="container">
          <h1>Welcome To Keeper</h1>
          <form className="login-form">
            <Input type="text" placeholder="Username" />
            <Input type="text" placeholder="Password" />
            <Input type="text" placeholder="Confirm Password" />
            <button type="submit" onClick={props.onRegistered}>Register</button>
          </form>
        </div>
    );
}

export default Register;