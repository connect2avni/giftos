import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Search from "./search.component";

const Header = () => {

    const [user, setUser] = useState('');
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    return (
        <>
            <nav className="navbar bg-body-tertiary border-bottom">
                <div className="container-fluid">
                    {
                        (token) ?
                            <>
                                <Link className="navbar-brand" to="/profile">Hello, {user}</Link>
                                {/* <Search /> */}
                                <Link to="/logout" className="btn btn-outline-secondary">Logout</Link>
                            </>
                            :
                            <>
                                <Link className="navbar-brand" to="/profile">Hello, user</Link>
                            </>
                    }

                </div>
            </nav>
        </>
    );
}



export default Header;