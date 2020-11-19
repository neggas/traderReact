
import React from "react";
import { NavLink } from "react-router-dom";

import "./Header-style.css";

export const Header = (props) => (

    <nav className="navbar navbar-default dark">
        <div className="container-fluid">
            <div className="navbar-header">
                <NavLink to="/" activeClassName="selected" className="navbar-brand">
                    Home
                </NavLink>
                <NavLink to="/stock" activeClassName="selected" className="navbar-brand">
                    Stock
                </NavLink>
                <NavLink to="/shop" activeClassName="selected" className="navbar-brand">
                    Shop
                </NavLink>
            </div>
        </div>
    </nav>
)



