import React from 'react';
import { connect } from 'react-redux';
import TodoItem from '../TodoItem';
import style from './todoList.css';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { text } = this.props;
        return (
            <div className={style.container}>
                {this.props.todoList && this.props.todoList.map((todo) => (
                   <TodoItem key={todo.id} priorityValue={todo.priority} id={todo.id} text={todo.text}/>
                ))}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return ({
        todoList: state.todos.todoList,
        todoItem: state.todos.todoItem,
    });
}


export default connect(
    mapStateToProps,
    null,
)(TodoList);
