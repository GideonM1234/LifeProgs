import React from "react";
import LogoIMG from "../assets/img/Untitled.png";

import "./nav.css";

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Nav() {
    const [open, setisopen] = useState(false);
    const location = useLocation(); // Get current path

    const toggleOpen = () => {
        setisopen(!open);
    };

    const toggleclose = () => {
        setisopen(false);
    };

    // Function to return background color style for active link
    const getActiveStyle = (path) => {
        return location.pathname === path ? { backgroundColor: "green", borderRadius: "5px", padding:"2px 9px 2px 9px ", color: 'white'} : {};
    };

    return (
        <section>
            <section className="Nav-sec">
                <div className="Navs">
                    <div>
                        <Link to={"/Home"}>
                            <img src={LogoIMG} alt="Logo Image" />
                        </Link>
                    </div>

                    <div>
                        <ul>
                            <Link to={"/Home"} className="link" tabIndex="0">
                                <li style={getActiveStyle("/Home")}>Home</li>
                            </Link>

                            <Link to={"/About"} className="link" tabIndex="0">
                                <li style={getActiveStyle("/About")}>About</li>
                            </Link>

                            <Link to={"/"} className="link" tabIndex="0">
                                <li style={getActiveStyle("/")}>Product</li>
                            </Link>

                            <Link to={"/Services"} className="link" tabIndex="0">
                                <li style={getActiveStyle("/Services")}>Service</li>
                            </Link>

                            <Link to={"/ContactUs"} className="link" tabIndex="0">
                                <li style={getActiveStyle("/ContactUs")}>Contact Us</li>
                            </Link>
                        </ul>
                    </div>

                    <div onClick={toggleOpen}>
                        <i className="bx bx-menu"></i>
                    </div>
                </div>
            </section>

            {open && (
                <section
                    className="Small-nav"
                    data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="300"
                    data-aos-duration="300"
                >
                    <div onClick={toggleclose}>
                        <i className="bx bx-x"></i>
                    </div>
                    <div>
                        <ul>
                            <Link to={"/Home"} className="link" onClick={toggleclose}>
                                <li>Home</li>
                            </Link>

                            <Link to={"/About"} className="link" onClick={toggleclose}>
                                <li>About</li>
                            </Link>

                            <Link to={"/"} className="link" onClick={toggleclose}>
                                <li>Product</li>
                            </Link>

                            <Link to={"/Services"} className="link" onClick={toggleclose}>
                                <li>Service</li>
                            </Link>

                            <Link to={"/ContactUs"} className="link" onClick={toggleclose}>
                                <li>Contact Us</li>
                            </Link>
                        </ul>
                    </div>
                </section>
            )}
        </section>
    );
}



export default Nav;
