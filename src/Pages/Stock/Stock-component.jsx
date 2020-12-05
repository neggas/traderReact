import React from "react";
import { connect } from "react-redux"
import { Card } from "../../Components/Card/Card-component"


import "./Stock-style.css"
export const StockContainer = ({ stock }) => (

    <div className="stock row">
        {stock.map(item => {
            if (item.times !== 0)
                return <Card key={item.name} price={item.price} name={item.name} nombre={item.times} />
        })}
    </div>
);





const mapStateToProps = state => ({
    stock: state.stock
})

export const Stock = connect(mapStateToProps)(StockContainer);
