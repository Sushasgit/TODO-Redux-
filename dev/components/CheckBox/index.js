import React from 'react';
import PropTypes from 'prop-types';

import style from './checkBox.css';

const CheckBox = (props) => {
    const { id, toggleCheckBox, complete } = props;
    return (
        <div>
            <input
              onChange={(event) => { toggleCheckBox(event.target.checked); }}
              checked={complete}
              className={style.checkBox}
              id={id}
              type="checkbox"
            />
            <label htmlFor={id} id={id} type="checkbox" />
        </div>
    );
};

CheckBox.propTypes = {
    toggleCheckBox: PropTypes.func,
    complete: PropTypes.bool,
    id: PropTypes.string,
};

CheckBox.defaultProps = {
    toggleCheckBox: () => {},
    complete: false,
    id: '',
};

export default CheckBox;
