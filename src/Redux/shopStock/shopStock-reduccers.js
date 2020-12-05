
const INITIAL_STATE = [
    {
        name: "BMW",
        price: 250,

    },
    {
        name: "APPLE",
        price: 350,

    },
    {
        name: "GOOGLE",
        price: 650,
    }
]

const shopStockReduccers = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case "ENDAY":

            return state.map(el => ({
                ...el,
                price: action.payload.random % 2 === 0 ? el.price + Math.floor(el.price / 100 * action.payload.percent) : el.price - Math.floor(el.price / 100 * action.payload.percent)
            }))
        case "addTodo":
            return [...state, { ...action.payload }];
        case "done":
            return state.filter(el => el.completed === true);
        default:
            return state;
    }
}

export default shopStockReduccers;
