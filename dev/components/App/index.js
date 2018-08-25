import React from 'react';
import { connect } from 'react-redux';

import style from './App.css';
import Header from '../Header/index';
import { getAllTodos, getAllPriority } from '../../actions';
import TodoList from '../TodoList';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            inputValue: "",
            flag: false,
            editObj: {},
            editIndex:""
        }
    }

    componentWillMount() {
        this.props.getAllTodos();
        this.props.getPriority();
    }

  render() {
      return (
          <div className={style.content}>
              <div className={style.container}>
                  <Header />
              </div>

              <div className={style.container}>
                  <div className={style.todoList}>
                      <TodoList />
                  </div>
              </div>
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
function mapDispatchToProp(dispatch) {
    return ({
        addData: (cloneTodosArray) => { dispatch(addData(cloneTodosArray)) },
        getAllTodos: () => { dispatch(getAllTodos()) },
        getPriority: () => { dispatch(getAllPriority()) },
        deleteTodo: (todoKey,index)=>{dispatch(deleteTodo(todoKey,index))},
        editTodo: (todoKey,index)=>{dispatch(editTodo(todoKey,index))}

    })
}

export default connect(mapStateToProps, mapDispatchToProp)(App);
