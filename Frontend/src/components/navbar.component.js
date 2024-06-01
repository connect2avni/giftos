import { Link, useNavigate } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { FaUser, FaShoppingBag, FaSearch } from 'react-icons/fa'
import WhyUsPage from '../pages/WhyUs';
import { useEffect, useState } from 'react';

const Navbar = ({ navid }) => {

    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('userName');
        if(!user){
            navigate('/login');
        } else {
            setUserName(user);
        }
    });

    const menus = [
        {
            id: "home",
            name: "Home",
            link: "/"
        },
        {
            id: "shop",
            name: "Shop",
            link: "/shop"
        },
        {
            id: "whyus",
            name: "Why Us",
            link: "/WhyUsPage"
        },
        {
            id: "testimonials",
            name: "Testimonials",
            link: "/Testimonial"
        },
        {
            id: "contactus",
            name: "Contact Us",
            link: "/ContactUs"
        }
    ]

    useEffect(() => {
        fetch('https://randomuser.me/api/')
        .then(results => results.json())
        .then(data => {
            // const {user} = data.results[0];
            const user = data.results[0];
            console.log(data.results[0]);
        })
    }, []);

    const logout = () => {
        localStorage.removeItem('userName');
        navigate('/login');
    }

    return (
        <>

            <div className="hero_area">

                <header className="header_section">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <Link className="navbar-brand" to="/">
                            <span>
                                Giftos
                            </span>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className=""></span>
                        </button>

                        <div className="collapse navbar-collapse innerpage_navbar" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                {
                                    menus.map((item, key) => {

                                        if (navid == item.id) {
                                            return (
                                                <li className="nav-item active" key={key}>
                                                    <Link className="nav-link" to={item.link}>
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            );
                                        } else {
                                            return (
                                                <li className="nav-item" key={key}>
                                                    <Link className="nav-link" to={item.link}>
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            );
                                        }


                                    })
                                }
                            </ul>
                            <div className="user_option">
                                {/* <Link to="/login">
                                    <FaUser />
                                    <span>
                                        Login
                                    </span>
                                </Link> */}
                                <Link to="#">{userName}</Link>
                                <Link to="#" onClick={logout}>logout</Link>
                                <Link to="/cart">
                                    <FaShoppingBag />
                                </Link>
                                <form className="form-inline ">
                                    <button className="btn nav_search-btn" type="submit">
                                        <FaSearch />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </header>


            </div>
        </>
    )
}

export default Navbar;
