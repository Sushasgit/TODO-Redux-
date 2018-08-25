import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CheckBox from '../CheckBox';
import Priority from '../Priority';
import style from './todoItem.css';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            priorityTodo: {},
        };
    }

    componentWillReceiveProps(nextProps) {
        const { priorityValue, priority } = this.props;
        if (nextProps.priority !== priority) {
            const priorityTodo = nextProps.priority.find(
                priorityItem => priorityItem.id === priorityValue,
            );
            this.setState({
                priorityTodo,
            });
        }
    }

    render() {
        const { text, id } = this.props;
        const { priorityTodo } = this.state;
        return (
            <div className={style.todoItem} style={{ borderTop: `4px solid ${priorityTodo.color}` }}>
                <div className={style.todoItemWrap}>
                    <CheckBox id={id} />

                    <p>
                        {text}
                    </p>

                </div>
                <Priority data={priorityTodo} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return ({
        priority: state.todos.priority,
    });
}

export default connect(
    mapStateToProps,
    null,
)(TodoItem);

TodoItem.propTypes = {
    text: PropTypes.string,
    id: PropTypes.string,
    priorityValue: PropTypes.string,
    priority: PropTypes.array,
};

TodoItem.defaultProps = {
    text: '',
    id: '',
    priority: [],
    priorityValue: 'law',
};
