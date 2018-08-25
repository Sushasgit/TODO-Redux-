import React from 'react';

import style from './checkBox.css';

const CheckBox = (props) => {
    return (
        <div>
            <input className={style.checkBox} id={props.id} type="checkbox" value="value1"/>
            <label htmlFor={props.id} />
        </div>
    );
};

export default CheckBox;