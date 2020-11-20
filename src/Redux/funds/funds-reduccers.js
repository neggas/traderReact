
const INITIAL_STATE = 1000

const fundsReduccers = (state = INITIAL_STATE, action) => {
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

export default fundsReduccers;
