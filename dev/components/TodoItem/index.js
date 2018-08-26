import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CheckBox from '../CheckBox';
import Priority from '../Priority';
import style from './todoItem.css';

import { editTodoItem, completeTodoItem, deleteTodoItem } from '../../actions';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);

        const { text, complete, priorityValue } = this.props;
        this.state = {
            priorityTodo: {},
            isEdit: false,
            newText: text,
            newPriority: priorityValue,
            complete,
        };

        this.showEditMode = this.showEditMode.bind(this);
        this.hadleChange = this.hadleChange.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.toggleCheckbox = this.toggleCheckbox.bind(this);
        this.deleteToDo = this.deleteToDo.bind(this);
    }

    showEditMode() {
        this.setState({
            isEdit: true,
        });
    }

    deleteToDo() {
        const { deleteTodo, id } = this.props;
        deleteTodo(id);
    }

    hadleChange(event) {
        event.preventDefault();
        const { target: { name, value } } = event;
        this.setState({ [name]: value });
    }

    editTodo(event) {
        event.preventDefault();
        const { newText, newPriority } = this.state;
        const { id, editTodo } = this.props;
        const newTodo = {
            newText,
            newPriority,
        };
        editTodo(id, newTodo);
        this.setState({
            isEdit: false,
        });
    }

    toggleCheckbox(checked) {
        const { completeTodo, id } = this.props;
        this.setState(prevState => ({
            complete: !prevState.complete,
        }));
        completeTodo(id, checked);
    }

    render() {
        const { text, id, priority } = this.props;
        const {
         priorityTodo, isEdit, complete, newPriority, newText,
        } = this.state;
        return (
            <div>
                {
                    isEdit && (
                        <div className={`${style.todoItem} ${complete ? style.completed : ''}`} style={{ borderTop: `4px solid ${priorityTodo.color}` }}>
                            <form onSubmit={this.editTodo}>
                                <input onChange={this.hadleChange} name="newText" value={newText} />
                                <select onChange={this.hadleChange} name="newPriority">
                                    <option defaultValue disabled value="">
                                        Choose
                                    </option>
                                    {priority.map(priorityOption => (
                                        <option value={priorityOption.name} key={priorityOption.id}>
                                            {priorityOption.name}
                                        </option>
                                    ))}
                                </select>
                                <div className={style.btnContainer}>
                                    <button type="button" onClick={() => { this.setState({ isEdit: false }); }}>
                                        Cancel
                                    </button>
                                    <button type="submit">
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    )
                }

                {
                    !isEdit && (
                        <div className={`${style.todoItem} ${complete ? style.completed : ''}`} style={{ borderTop: `4px solid ${priorityTodo.color}` }}>
                            <div className={style.todoItemWrap}>
                                <CheckBox id={id} toggleCheckBox={this.toggleCheckbox} complete={complete} />
                                <p>
                                    {text}
                                </p>
                            </div>
                            <Priority data={newPriority} />
                            <button type="button" onClick={this.showEditMode} className={style.todoItemEdit}>
                                <img src="https://image.flaticon.com/icons/svg/61/61456.svg" alt="" />
                            </button>
                            <button type="button" onClick={this.deleteToDo} className={style.todoItemDelete}>
                                <img src="https://png.icons8.com/small/1600/filled-trash.png" alt="" />
                            </button>
                        </div>
                    )
                }
            </div>

        );
    }
}

function mapStateToProps(state) {
    return ({
        priority: state.todos.priority,
    });
}

const mapDispatchToProps = dispatch => ({
    editTodo: (id, todo) => dispatch(editTodoItem(id, todo)),
    completeTodo: (id, checked) => dispatch(completeTodoItem(id, checked)),
    deleteTodo: id => dispatch(deleteTodoItem(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoItem);

TodoItem.propTypes = {
    editTodo: PropTypes.func,
    deleteTodo: PropTypes.func,
    completeTodo: PropTypes.func,
    priority: PropTypes.array,
    text: PropTypes.string,
    complete: PropTypes.bool,
    priorityValue: PropTypes.string,
    id: PropTypes.string,

};

TodoItem.defaultProps = {
    editTodo: () => {},
    deleteTodo: () => {},
    completeTodo: () => {},
    priority: [],
    text: '',
    complete: false,
    priorityValue: '',
    id: '',
};
