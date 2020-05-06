

// Component to show statics if number of votes is bigger than 0

import React from 'react';
import StatisticLine from './StatisticLine'

const Statistics = ( { store }) => {

    const allVotes = store.getState().good + store.getState().ok + store.getState().bad

    return (
    <div>
        <h5 className="my-4">Statistics</h5>
        <table>
            <tbody>
                <StatisticLine title='Goog' figure={store.getState().good} />
                <StatisticLine title='Neutral' figure={store.getState().ok} />
                <StatisticLine title='Bad' figure={store.getState().bad} />
                <StatisticLine title='All votes' figure={allVotes} />
                <StatisticLine title='Average score' figure={ (store.getState().good - store.getState().bad) / `${allVotes}`} />
                <StatisticLine title='Positive votes' figure={ (store.getState().good / `${allVotes}`) * 100 } unit="%"/>
            </tbody>
        </table>
    </div>
    )
}

export default Statistics