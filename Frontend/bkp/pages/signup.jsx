import { Link } from 'react-router-dom';
import React from "react"
class Signup extends React.Component{
 render(){
    return(
        <>
            <div className="login-container" id="signup">
            <div className="ring">
                <i style={{ "--clr": "#00ff0a" }}></i>
                <i style={{ "--clr": "#ff0057" }}></i>
                <i style={{ "--clr": "#fffd44" }}></i>
                <div className="login">
                    <h2>Sign in</h2>
                    <div className="inputBx">
                        <input type="name" placeholder="Full Name" />
                    </div>
                    <div className="inputBx">
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="inputBx">
                        <input type="password" placeholder=" Create Password" />
                    </div>
                    <div className="inputBx">
                        <input type="password" placeholder=" Confirm Password" />
                    </div>
                    <div className="inputBx">
                        <input type="submit" value="Sign up" />
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
 }   
}
export default Signup;