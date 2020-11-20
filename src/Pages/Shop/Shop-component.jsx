import React, { Component } from "react";

import { Card } from "../../Components/Card/Card-component"

import "./Shop-style.css"
class Shop extends Component {
    constructor() {
        super();

        this.state = {
            shopStock: [
                {
                    id: 1,
                    name: "BMW",
                    price: 2500,

                },
                {
                    id: 2,
                    name: "APPLE",
                    price: 3500,

                },
                {
                    id: 3,
                    name: "GOOGLE",
                    price: 6500,

                }
            ]
        }
    }


    render() {
        return (
            <div className="shop row">
                {this.state.shopStock.map(item => <Card key={item.id} price={item.price} name={item.name} />)}
            </div>
        )
    }
}

export default Shop;