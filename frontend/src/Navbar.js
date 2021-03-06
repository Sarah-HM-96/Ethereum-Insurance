import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default ({ navigation }) => {
    const location = useLocation();

    const isActive = route =>
        location.pathname === route ? 'active' : '';

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Ethereum Insurance</Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className={`nav-item ${isActive('/')}`}>
                        <Link className="nav-link" to="/">Home Page</Link>
                    </li>
                    <li className={`nav-item ${isActive('/user')}`}>
                        <Link className="nav-link" to="/user">Customer</Link>
                    </li>
                    <li className={`nav-item ${isActive('/merchant')}`}>
                        <Link className="nav-link" to="/merchant">Policy Admin</Link>
                    </li>
                </ul>
            </div>
        </nav>

    );
}