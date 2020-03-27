import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HelloApp from './components/HelloApp'
import Home from './components/Home'

function App() {
  /* Hello */

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/HelloApp">
            <HelloApp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
