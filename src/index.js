

import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {

  return (
    <div>
      <button type="button" className="btn btn-outline-primary mr-1" onClick={e => store.dispatch({ type: 'GOOD' })}>good</button> 
      <button type="button" className="btn btn-outline-primary m-1" onClick={e => store.dispatch({ type: 'OK' })}>neutral</button> 
      <button type="button" className="btn btn-outline-primary m-1" onClick={e => store.dispatch({ type: 'BAD' })}>bad</button>
      <button type="button" className="btn btn-outline-primary m-1" onClick={e => store.dispatch({ type: 'ZERO' })}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>neutral {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
