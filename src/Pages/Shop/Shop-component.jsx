import React from "react";
import { connect } from "react-redux";

import { Card } from "../../Components/Card/Card-component"

import "./Shop-style.css"
export const ShopContainer = ({ shopStock }) => (
    <div className="shop row">
        {console.log(...shopStock)}
        {shopStock.map(item => <Card key={item.id} price={item.price} name={item.name} />)}
    </div>
)



const mapStateToProps = state => ({
    shopStock: state.shopStock
})


// const mapDispatchToProps = (dispatch) => (({
//     addTodo: (todo) => dispatch(addTodo(todo))
// }))


export const Shop = connect(mapStateToProps)(ShopContainer);
