import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import style from './App.css';
import Header from '../Header/index';
import { getAllTodos, getAllPriority } from '../../actions';
import TodoList from '../TodoList';
import FilterPanel from '../FilterPanel';

class App extends React.Component {
    componentWillMount() {
        const { getAllList, getPriorityList } = this.props;
        getAllList();
        getPriorityList();
    }

  render() {
      const { todoList, priority } = this.props;
      return (
          <div className={style.content}>
              <div className={style.container}>
                  <Header />
                  <FilterPanel />
              </div>

              <div className={style.container}>
                  <div className={style.todoList}>
                      <TodoList priority={priority} data={todoList} />
                  </div>
              </div>
          </div>
          );
    }
}

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.complete);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.complete);
        default:
            return todos;
    }
};

function mapStateToProps(state) {
    return ({
        todoList: getVisibleTodos(state.todos.todoList, state.filter),
        todoItem: state.todos.todoItem,
        priority: state.todos.priority,
    });
}

function mapDispatchToProp(dispatch) {
    return ({
        getAllList: () => { dispatch(getAllTodos()); },
        getPriorityList: () => { dispatch(getAllPriority()); },
    });
}

App.propTypes = {
    getAllList: PropTypes.func,
    getPriorityList: PropTypes.func,
    priority: PropTypes.array,
    todoList: PropTypes.array,
};

App.defaultProps = {
    getAllList: () => {},
    getPriorityList: () => {},
    priority: [],
    todoList: [],
};

export default connect(mapStateToProps, mapDispatchToProp)(App);
