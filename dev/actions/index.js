import { todosRef, priorityRef } from '../firebase';

export const addTodo = todo => ({
        type: 'ADD_TODO',
        todo,
});

export const setVisibleList = filter => ({
        type: 'FILTER',
        filter,
});

export const toggleTodo = (id, isComplete) => ({
    type: 'TOGGLE_TODO',
    id,
    isComplete,

});

export const getPriority = priority => ({
        type: 'GET_PRIORITY',
        payload: priority,
});

export const getTodos = todos => ({
    type: 'GET_TODOS',
    payload: todos,
});

export const deletetoDo = id => ({
    type: 'DELETE_TODO',
    id,
});


export const addTodoItem = todo => (
    (dispatch) => {
        todosRef.push(todo).then((ref) => {
            dispatch(addTodo({
                id: ref.key,
                ...todo,
            }));
        });
    });

export const editTodoItem = (id, updates) => (
     (dispatch) => {
        const todoRef = todosRef.child(`/${id}`);
        const newTodo = {
            priority: updates.newPriority,
            text: updates.newText,
        };
        dispatch({
            type: 'EDIT_TODO',
            id,
            newTodo,
        });
        return todoRef.update(newTodo);
    }
);

export const completeTodoItem = (id, isComplete) => (
    (dispatch) => {
        const todoRef = todosRef.child(`/${id}`);
        const newTodo = {
            complete: isComplete,
        };
        dispatch(toggleTodo(id, isComplete));

        return todoRef.update(newTodo);
    }
);

export const deleteTodoItem = id => (
    (dispatch) => {
        const todoRef = todosRef.child(`/${id}`);

        dispatch(deletetoDo(id));
        return todoRef.remove();
    }
);

export const getAllTodos = () => (
    dispatch => (
        todosRef.on('value', (snapshot) => {
            const todos = [];
            snapshot.forEach((childSnapshot) => {
                todos.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val(),
                });
            });
            dispatch(getTodos(todos));
        })
));

export const getAllPriority = () => (
    (dispatch) => {
         priorityRef.on('value', (snapshot) => {
            const priority = [];
            snapshot.forEach((childSnapshot) => {
                priority.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val(),
                });
            });
            dispatch(getPriority(priority));
        });
    });
