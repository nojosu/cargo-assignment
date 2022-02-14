import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'

import { initializeShips } from './reducers/ships'
import Ships from './components/Ships'
import Ship from './components/Ship'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeShips())
  }, [dispatch])

  const padding = {
    padding: 5
  }

  const navStyle = {
    margin: 10,
    padding: 10,
    backgroundColor: 'lightblue'
  }

  return (
    <Router>
      <div style={navStyle}>
        <Link style={padding} to="/">Home</Link>
      </div>

      <Switch>
        <Route path="/ship/:id">
          <Ship />
        </Route>
        <Route path="/">
          <Ships />
        </Route>
      </Switch>

    </Router>
  )
}

export default App
