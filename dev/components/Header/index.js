import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import style from './header.css';

import { addTodoItem } from '../../actions';
import PieChartTodo from '../PieChartTodo';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
                text: '',
                complete: false,
                priority: 'low',
                pieChartData: [],
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.todoList) {
            this.setState({ pieChartData: this.countPriorities(nextProps.todoList) });
        }
    }

    onSubmit(event) {
        event.preventDefault();
        const { text, complete, priority } = this.state;
        const { addTodo } = this.props;
        const todo = {
            text,
            complete,
            priority,
        };

        if (text) {
            addTodo(todo);
        }
        this.setState({ text: '' });
    }

    countPriorities(todoList) {
       const result = [];
       result.push({
           name: 'low',
           value: todoList.filter(todo => todo.priority === 'low').length,
       });

        result.push({
            name: 'medium',
            value: todoList.filter(todo => todo.priority === 'medium').length,
        });

        result.push({
            name: 'high',
            value: todoList.filter(todo => todo.priority === 'high').length,
        });
        return result;
    }

    render() {
        const { text, pieChartData } = this.state;
        return (
            <header className={style.header}>
                <img src="http://icons-for-free.com/free-icons/png/512/1622833.png" alt="" />
                <form onSubmit={this.onSubmit}>
                    <input
                      type="text"
                      placeholder="Add task"
                      value={text}
                      onChange={event => this.setState({ text: event.target.value })}
                    />
                    <button type="submit">
                        Add
                    </button>
                </form>
                <PieChartTodo data={pieChartData} />
            </header>
        );
    }
}

function mapStateToProps(state) {
    return ({
        todoList: state.todos.todoList,
        todoItem: state.todos.todoItem,
        priority: state.todos.priority,
    });
}

const mapDispatchToProps = dispatch => ({
    addTodo: todo => dispatch(addTodoItem(todo)),
});

Header.propTypes = {
    todoList: PropTypes.array,
    addTodo: PropTypes.func,
};

Header.defaultProps = {
    addTodo: () => {},
    todoList: [],
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header);
