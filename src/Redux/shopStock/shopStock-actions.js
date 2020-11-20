

export const toggleCompleted = todo => ({
    type: "toggleCompleted",
    payload: { ...todo, completed: !todo.completed }
})

export const deleteTodo = todo => ({
    type: "deleteTodo",
    payload: todo.id
})

export const addTodo = todo => ({
    type: "addTodo",
    payload: { ...todo }
})

export const done = () => ({
    type: "done",
    payload: null
})




