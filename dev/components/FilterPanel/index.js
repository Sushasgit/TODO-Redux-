import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setVisibleList } from '../../actions';

import style from './filters.css';

const FilterPanel = props => (
    <div className={style.filterPanel}>
        <button className={style.filterBtn} type="button" onClick={() => { props.onFilterClick('SHOW_ALL'); }}>
            All
        </button>
        <button className={style.filterBtn} type="button" onClick={() => { props.onFilterClick('SHOW_COMPLETED'); }}>
            Completed
        </button>
        <button className={style.filterBtn} type="button" onClick={() => { props.onFilterClick('SHOW_ACTIVE'); }}>
            Active
        </button>
    </div>
);

const mapStateToProps = state => ({
        current: state.filter,
});

const mapDispatchToProps = dispatch => ({
    onFilterClick: (filter) => {
        dispatch(setVisibleList(filter));
    },
});

FilterPanel.propTypes = {
    onFilterClick: PropTypes.func,
};

FilterPanel.defaultProps = {
    onFilterClick: () => {},
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FilterPanel);
