import React from "react";
import Input from "./Input";

const Login = (props) => {
    return (
        <div className="container">
          <h1>Hello</h1>
          <form className="login-form">
            <Input type="text" placeholder="Username" />
            <Input type="text" placeholder="Password" />
            <button type="submit" onClick={props.onLogin}>Login</button>
          </form>
          <p onClick={props.onToggleReg}>Register now</p>
        </div>
    );
}

export default Login;