import React from "react";
import { connect } from "react-redux";

import { Card } from "../../Components/Card/Card-component"
import { sell } from "../../Redux/funds/funds-actions";

import "./Shop-style.css"
export const ShopContainer = ({ shopStock }) => (
    <div className="shop row">
        {shopStock.map(item => <Card key={item.name} price={item.price} name={item.name} />)}
    </div>
)



const mapStateToProps = state => ({
    shopStock: state.shopStock
})




export const Shop = connect(mapStateToProps)(ShopContainer);
