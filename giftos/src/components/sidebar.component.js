import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ styles, selected }) => {

    const menus = [
        {
            id: "home",
            name: "Home",
            link: "/",
        },
        {
            id:"products",
            name: "Products",
            link:"/products"
        },
    ]

    return (
        <>
            <div className={styles}>
                <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ minHeight: '81vh' }}>

                    <ul className="nav nav-pills flex-column mb-auto">  
                        {
                            menus.map((menu) => (
                                <li className="nav-item" key={menu.id}>
                                    <Link to={menu.link} className={`nav-link ${menu.id === selected ? 'active' : 'link-dark'}`} aria-current="page">
                                        {menu.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Sidebar;