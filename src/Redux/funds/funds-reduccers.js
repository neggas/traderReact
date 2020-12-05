
const INITIAL_STATE = 10000

const fundsReduccers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "BUY":
            return state - action.payload.price * action.payload.times;
        case "SELL":
            return state + (action.payload.price * action.payload.times);
        default:
            return state;
    }
}

export default fundsReduccers;
