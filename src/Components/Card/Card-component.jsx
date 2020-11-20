
import React from "react";
import "./Card-style.css";

export const Card = ({ name, price }) => (
    <div className="card item container-fluid col-md-4">
        <div className="card-header row">
            <h4 className="item-name ">{name}</h4>
            <span className="item-price">(prix actuelle:{price.toLocaleString()})</span>
        </div>
        <div className="card-body row">
            <input type="number" />
            <button className="btn card-btn ripple">Buy</button>
        </div>
    </div>
)