import React from 'react';
import PropTypes from 'prop-types';

import { PieChart, Pie, Tooltip } from 'recharts';

import style from './piechart.css';

const PieChartTodo = (props) => {
    const { data } = props;
        return (
            <div className={style.pieChart}>
                <PieChart width={400} height={400}>
                    <Pie dataKey="value" data={data} cx={300} cy={200} innerRadius={40} outerRadius={80} fill="#f5a623" />
                    <Tooltip />
                </PieChart>
            </div>
        );
};

PieChartTodo.propTypes = {
    data: PropTypes.array,
};

PieChartTodo.defaultProps = {
    data: [],
};

export default PieChartTodo;
