import { combineReducers } from "redux";
import fundsReduccers from "./funds/funds-reduccers";
import shopStockReduccers from "./shopStock/shopStock-reduccers";
import stockReduccers from "./stock/stock-reduccers";



export default combineReducers({
    funds: fundsReduccers,
    shopStock: shopStockReduccers,
    stock: stockReduccers
})