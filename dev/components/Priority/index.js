import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import style from './priority.css';

const Priority = (props) => {
    const { priority, data } = props;
    const priorityTodo = priority.length > 0 ? priority.find(item => item.name === data) : {};
    return (
        <div className={style.priority}>
            <div
              className={style.priorityDot}
              style={{ backgroundColor: `${priorityTodo.color}` }}
            />
            <h4>
                {`${priorityTodo.name} priority`}
            </h4>
        </div>
    );
};

function mapStateToProps(state) {
    return ({
        priority: state.todos.priority,
    });
}

Priority.propTypes = {
    priority: PropTypes.array,
    data: PropTypes.string,
};

Priority.defaultProps = {
    priority: [],
    data: '',
};

export default connect(
    mapStateToProps,
    null,
)(Priority);
