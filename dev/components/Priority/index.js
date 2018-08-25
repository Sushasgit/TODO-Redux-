import React from 'react';
import style from './priority.css';

const Priority = (props) => {
    const { name, color } = props.data;
    return (
        <div className={style.priority}>
            <div
              className={style.priorityDot}
              style={{ backgroundColor: `${color}` }}
            />
            <h4>
                {`${name} priority`}
            </h4>
        </div>
    );
};

export default Priority;