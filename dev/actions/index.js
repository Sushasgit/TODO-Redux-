import { todosRef, priorityRef } from '../firebase';

export function addTodo(todo) {
    return {
        type: 'ADD_TODO',
        todo,
    };
}

export const addTodoItem = todo => (dispatch) => {
    return todosRef.push(todo).then((ref) => {
        dispatch(addTodo({
            id: ref.key,
            ...todo,
        }));
    });
};

export const getAllTodos = () => (dispatch) => {
    return todosRef.on('value',(snapshot) => {
        const todos = [];
        snapshot.forEach((childSnapshot) => {
            todos.push({
                id: childSnapshot.key,
                ...childSnapshot.val(),
            });
        });
        dispatch({
            type: 'GET_TODOS',
            payload: todos,
        });
    });
};

export const getAllPriority = () => (dispatch) => {
    return priorityRef.on('value',(snapshot) => {
        const priority = [];
        snapshot.forEach((childSnapshot) => {
            priority.push({
                id: childSnapshot.key,
                ...childSnapshot.val(),
            });
        });
        console.log('actionPriority', priority)
        dispatch({
            type: 'GET_PRIORITY',
            payload: priority,
        });
    });
};
