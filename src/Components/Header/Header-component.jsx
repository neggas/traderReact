
import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { endDay } from "../../Redux/shopStock/shopStock-actions"

import "./Header-style.css";

export const HeaderContainer = ({ funds, endDay, stock, shopStock }) => (

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
            <div className="funds row">
                <h4 className="col-md-6">{funds.toLocaleString()} FCFA</h4>
                <button className="col-md-6 ripple" onClick={() => endDay({ random: Math.floor(Math.random() * 100), percent: Math.random(Math.floor(Math.random() * 45)) })}>End-day</button>
            </div>
        </div>
    </nav>
)

const mapStateToProps = state => ({
    funds: state.funds,
    stock: state.stock,
    shopStock: state.shopStock
})

const mapDispatchToProps = (dispatch) => (({
    endDay: (percent) => dispatch(endDay(percent))
}))

export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)

