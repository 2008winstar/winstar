/**
 * @file file description here.
 * @author winstar
 * @date 2017/9/1
 */

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? Object.assign({}, todo, {completed: !todo.completed})
                    : todo
            )
        default:
            return state
    }
}

export default todos
