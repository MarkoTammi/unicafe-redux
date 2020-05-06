

import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'
import Statistics from './Components/Statistics';

const store = createStore(reducer)

const App = () => {

  return (
    <div>
      <h3 className="mb-5">Unicafe - redux</h3>
      <button type="button" className="btn btn-outline-primary mr-1" onClick={e => store.dispatch({ type: 'GOOD' })}>Good</button> 
      <button type="button" className="btn btn-outline-primary m-1" onClick={e => store.dispatch({ type: 'OK' })}>Neutral</button> 
      <button type="button" className="btn btn-outline-primary m-1" onClick={e => store.dispatch({ type: 'BAD' })}>Bad</button>
      <button type="button" className="btn btn-outline-primary m-1" onClick={e => store.dispatch({ type: 'ZERO' })}>Reset stats</button>
      {(store.getState().good + store.getState().ok + store.getState().bad) !== 0 ? <Statistics store={store}/> :  <p className="mt-3">No votes given yet. Give your vote by pressing button!</p>}
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
