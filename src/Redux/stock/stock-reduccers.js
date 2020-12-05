
export const INITIAL_STATE = [];

const stockReduccers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SHOP":

            let { name, times } = action.payload;

            if (state.length > 0 && state.filter(el => el.name === action.payload.name).length !== 0) {
                return state.map(el => {
                    if (el.name === name) {
                        el.times = parseInt(el.times) + parseInt(times);
                        return el;
                    } else {
                        return el;
                    }
                })
            } else {
                return [...state, action.payload]
            }

        case "SELL":
            return state.map(el => (el.name === action.payload.name) ? { ...el, times: el.times -= action.payload.times } : el);

        case "ENDAY":
            return state.map(el => ({
                ...el,
                price: action.payload.random % 2 === 0 ? el.price + Math.floor(el.price / 100 * action.payload.percent) : el.price - Math.floor(el.price / 100 * action.payload.percent)
            }))
        case "done":
            return state.filter(el => el.completed === true);
        default:
            return state;
    }
}

export default stockReduccers;
