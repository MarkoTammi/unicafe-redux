


// Component to show one static line

import React from 'react';

const StatisticLine = (props) => {
    //console.log('StatisticsLine')

    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.figure} {props.unit}</td>
        </tr>
    )
}

export default StatisticLine