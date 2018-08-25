const initialState = {
    todoItem: {},
    todoList: [],
    priority: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todoItem: action.todo,
            };
        case 'GET_TODOS':
            return {
                ...state,
                todoList: action.payload,
            };
        case 'EDIT_TODO':
            return {
                ...state,
                todoList: state.todoList.map((todo) => {
                    if (todo.id === action.id) {
                        return {
                            ...todo,
                            priority: action.newTodo.priority,
                            text: action.newTodo.text,
                        };
                    }
                    return todo;
                }),
            };

        case 'TOGGLE_TODO':
            return {
                ...state,
                todoList: state.todoList.map((todo) => {
                    if (todo.id === action.id) {
                        return {
                            ...todo,
                          complete: action.isComplete,
                        };
                    }
                    return todo;
                }),
            };
        case 'GET_PRIORITY':
            return {
                ...state,
                priority: action.payload,
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todoList: state.todoList.filter(({ id }) => id !== action.id),
            };

        default:
            return state;
    }
}
