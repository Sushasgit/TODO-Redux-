import { todosRef, priorityRef } from '../firebase';

export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        todo,
    };
}

export const editTodo = (id, updates) => {
    return {
        type: 'EDIT_TODO',
        id,
        updates,
    };
};

export const setVisibleList = (filter) => {
    return {
        type: 'FILTER',
        filter,
    };
};


export const addTodoItem = todo => (dispatch) => {
    return todosRef.push(todo).then((ref) => {
        dispatch(addTodo({
            id: ref.key,
            ...todo,
        }));
    });
};

export const editTodoItem = (id, updates) => {
    return (dispatch) => {
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
    };
};

export const completeTodoItem = (id, isComplete) => {
    return (dispatch) => {
        const todoRef = todosRef.child(`/${id}`);
        const newTodo = {
            complete: isComplete,
        };
        dispatch({
            type: 'TOGGLE_TODO',
            id,
            isComplete,
        });

        return todoRef.update(newTodo);
    };
};

export const deleteTodoItem = (id) => {
    return (dispatch) => {
        const todoRef = todosRef.child(`/${id}`);

        dispatch({
            type: 'DELETE_TODO',
            id,
        });
        return todoRef.remove();
    }
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