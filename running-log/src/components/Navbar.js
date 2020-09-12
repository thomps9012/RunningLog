import React from "react";
import { Link, withRouter } from "react-router-dom";
// import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top nav-color" id="homeNavBar">
            <div className="container">
                {/* need to insert logo into navbar here */}
                <a className="navbar-brand float" href="#page-top"><img src="" id="nav-icon" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    {/* Checks for user authentication */}
                    {props.authenticated ?
                        // If authentication then give this menu
                        props.history.location.pathname === "/" ?
                            <ul className="navbar-nav text-uppercase ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#page-top">Home</a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Entry" className="nav-link">Enter a Run</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Account" className="nav-link">Account</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={props.clickSignout} >Sign Out</a>
                                </li>
                            </ul>
                            // Checks the path and displays links accordingly
                            : props.history.location.pathname === "/Home" ?
                                <ul className="navbar-nav text-uppercase ml-auto">
                                    <li className="nav-item">
                                        <Link to="/Entry" className="nav-link">Enter a Run</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/Account" className="nav-link">Account</Link>
                                    </li>
                                </ul>
                                : props.history.location.pathname === "/Account" ?
                                    <ul className="navbar-nav text-uppercase ml-auto">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#page-top">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/Entry" className="nav-link">Enter a Run</Link>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" onClick={props.clickSignout} >Sign Out</a>
                                        </li>
                                    </ul>
                                    : null
                        :
                        // If unauthorized give this menu
                        <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#page-top">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={props.clickModalSignIn}>Sign In</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={props.clickModalSignUp}>Sign Up</a>
                            </li>
                        </ul>
                    }
                </div>
            </div>
        </nav>
    );
}

export default withRouter(Navbar);