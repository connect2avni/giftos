import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import "../LoginStyle.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import { api } from './constants.component';
import { paste } from '@testing-library/user-event/dist/paste';
// import { login } from '../services/services';
import UserService from '../services/users.service'

const LoginComponent = () => {

    const navigate = useNavigate();
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const userService= new UserService() ;

    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleSubmit = async () => {

        try{
            const response= userService.login({
                email: Email,
                password: Password
                
            });
            console.log(response);
            const userName =response.data.user.userName;
            localStorage.setItem('userName', userName);
            navigate('/');

        }
        catch(e){
            console.log(e);
        }

        // try{
        //     const response = login({
        //         email: Email,
        //         password: Password
        //     });
    
        //     const userName =response.data.user.userName;
        //     localStorage.setItem('userName', userName);
        //     navigate('/');
        // } catch(e) {
        //     console.log(e);
        // }
    }

    return (
        <div className="login-container">
            <div className="ring">
                <i style={{ "--clr": "#00ff0a" }}></i>
                <i style={{ "--clr": "#ff0057" }}></i>
                <i style={{ "--clr": "#fffd44" }}></i>
                <div className="login">
                    <h2>Login</h2>
                    <div className="inputBx">
                        <input type="email" placeholder="Email" value={Email} onChange={handleEmail} />
                    </div>
                    <div className="inputBx">
                        <input type="password" placeholder="Password" value={Password} onChange={handlePassword} />
                    </div>
                    <div className="inputBx">
                        <input type="submit" value="Sign in" onClick={handleSubmit}/>
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