import { Link } from 'react-router-dom';
import React from "react"
class Signup extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            cpassword: '',
            full_name: '',
        }
    }

    handleName = e => {
        this.setState({
            full_name: e.target.value
        })
    }

    handleName = e => {
        this.setState({
            full_name: e.target.value
        })
    
    }


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
                        <input type="name" placeholder="Full Name" value={this.state.full_name} onChange={this.handleName}/>
                    </div>
                    <div className="inputBx">
                        <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmail}/>
                    </div>
                    <div className="inputBx">
                        <input type="password" placeholder=" Create Password" value={this.state.password} onChange={this.handlePassword}/>
                    </div>
                    <div className="inputBx">
                        <input type="password" placeholder=" Confirm Password" value={this.state.cpassword} onChange={this.handleCPassword}/>
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