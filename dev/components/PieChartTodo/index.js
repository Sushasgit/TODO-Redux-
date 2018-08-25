import React from 'react';
import PropTypes from 'prop-types';

import { PieChart, Pie, Tooltip } from 'recharts';

const PieChartTodo = (props) => {
    const { data } = props;
        return (
            <PieChart width={800} height={400}>
                <Pie data={data} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#f5a623" />
                <Tooltip />
            </PieChart>
        );
};

PieChartTodo.propTypes = {
    data: PropTypes.array,
};

PieChartTodo.defaultProps = {
    data: [],
};

export default PieChartTodo;
