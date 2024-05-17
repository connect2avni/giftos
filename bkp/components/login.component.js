import { Link } from 'react-router-dom';
import React from "react";
import "../LoginStyle.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const LoginComponent = () => {

    return (
        <div className="login-container">
            <div className="ring">
                <i style={{ "--clr": "#00ff0a" }}></i>
                <i style={{ "--clr": "#ff0057" }}></i>
                <i style={{ "--clr": "#fffd44" }}></i>
                <div className="login">
                    <h2>Login</h2>
                    <div className="inputBx">
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="inputBx">
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="inputBx">
                        <input type="submit" value="Sign in" />
                    </div>
                    <div className="links">
                        <Link to="#">Forget Password</Link>
                        <Link to="/signup">Signup</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default LoginComponent;