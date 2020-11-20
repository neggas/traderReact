
const INITIAL_STATE = [
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

const shopStockReduccers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "toggleCompleted":
            return state.map(todo => (todo.id === action.payload.id) ? { ...todo, ...action.payload } : todo)
        case "deleteTodo":
            return state.filter(todo => todo.id !== action.payload)
        case "addTodo":
            return [...state, { ...action.payload }];
        case "done":
            return state.filter(el => el.completed === true);
        default:
            return state;
    }
}

export default shopStockReduccers;
