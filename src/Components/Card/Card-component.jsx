
import React from "react";
import "./Card-style.css";

export const Card = props => (
    <div className="card item container-fluid col-md-4">
        <div className="card-header row">
            <h4 className="item-name ">Nom</h4>
            <span className="item-price">(prix actuelle:3,000)</span>
        </div>
        <div className="card-body row">
            <input type="number" />
            <button className="btn card-btn ripple">Buy</button>
        </div>
    </div>
)