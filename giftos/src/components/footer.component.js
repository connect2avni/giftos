import React from "react";
import { Link } from "react-router-dom";
import { AuthorURL,Author } from "./constants.component";

const Footer = () => {
    return (
        <>
            <div className="d-flex justify-content-between p-3 bg-dark text-white">
                <div>
                    &copy; {new Date().getUTCFullYear()} Giftos. All Rights Reserved.
                </div>
                <div>
                    Powered by <Link to={AuthorURL} target="_blank" rel="noopener noreferrer" className="text-white">{Author}</Link>
                </div>
            </div>
        </>
    );
}

export default Footer;