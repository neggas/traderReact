

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { buy, sell } from "../../Redux/funds/funds-actions";
import { shop } from "../../Redux/stock/stock-actions";
import "./Card-style.css";

const CardContainer = ({ buy, shop, name, price, nombre, funds, sell }) => {

    let [times, setTimes] = useState(0);
    const { pathname } = useLocation();

    return (

        <div className="card item container-fluid col-md-4">
            <div className="card-header row">
                <h4 className="item-name ">{name}</h4><br />
                <span className="item-price">(prix actuelle:{price ? price.toLocaleString() : null}){nombre ? `/Quantité:${nombre}` : null}</span>
            </div>
            <div className="card-body row">
                <input type="number" value={times} onChange={e => setTimes(e.target.value)} />
                <button
                    className="btn card-btn ripple"
                    disabled={(times <= 0 || (pathname !== "/stock" && parseInt(times * price) > funds) || nombre < times)}
                    onClick={() => {
                        if (times > 0) {
                            { pathname === "/stock" ? sell({ times: parseInt(times), price, name }) : (buy({ times, price }) && shop({ name, price, times })) }
                        }


                        setTimes(0);
                    }}
                >{pathname === "/stock" ? "SELL" : "BUY"}</button>
            </div>
        </div >
    )

}

const mapStateToProps = state => ({
    funds: state.funds
})


const mapDispatchToProps = (dispatch) => (({
    buy: (item) => dispatch(buy(item)),
    sell: (item) => dispatch(sell(item)),
    shop: (item) => dispatch(shop(item)),

}))

export const Card = connect(mapStateToProps, mapDispatchToProps)(CardContainer);
