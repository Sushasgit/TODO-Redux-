import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';
import style from './todoList.css';

class TodoList extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <div className={style.container}>
                {data && data.map(todo => (
                    <TodoItem
                      key={todo.id}
                      priorityValue={todo.priority}
                      id={todo.id}
                      text={todo.text}
                      complete={todo.complete}
                    />
                ))}
            </div>
        );
    }
}

TodoList.propTypes = {
    data: PropTypes.array,
};

TodoList.defaultProps = {
    data: [],
};

export default TodoList;
