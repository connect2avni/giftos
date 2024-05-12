import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {FaUser,FaShoppingBag,FaSearch} from 'react-icons/fa'

const Navbar = () => {
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
                            <ul className="navbar-nav  ">
                                <li className="nav-item ">
                                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/shop">
                                        Shop
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/why">
                                        Why Us
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/testimonial">
                                        Testimonial
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact Us</Link>
                                </li>
                            </ul>
                            <div className="user_option">
                                <Link to="">
                                    <FaUser/>
                                    <span>
                                        Login
                                    </span>
                                </Link>
                                <Link to="">
                                    <FaShoppingBag/>
                                </Link>
                                <form className="form-inline ">
                                    <button className="btn nav_search-btn" type="submit">
                                        <FaSearch/>
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
