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
        case 'GET_PRIORITY':
            return {
                ...state,
                priority: action.payload,
            };
        default:
            return state;
    }
}
