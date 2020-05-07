

import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

import Statistics from './Components/Statistics';
import Button from './Components/Button'

const store = createStore(reducer)

const App = () => {

  return (
    <div>
      <h3 className="mb-5">Unicafe - redux</h3>
      
      <Button store={store} type='GOOD' buttonText='Good'/>
      <Button store={store} type='OK' buttonText='Neutral'/>
      <Button store={store} type='BAD' buttonText='Bad'/>
      <Button store={store} type='ZERO' buttonText='Reset stats'/>
    
      {(store.getState().good + store.getState().ok + store.getState().bad) !== 0 ? 
          <Statistics store={store}/> :  
          <p className="mt-3">No votes given yet. Give your vote by pressing button!</p>
          }
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
