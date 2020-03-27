import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HelloApp from './components/HelloApp'
import Home from './components/Home'
import Navigator from './components/Navigator'
import First from './components/First'

function App() {
  /* Hello */

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Navigator />
          </Route>     
          <Route path="/HelloApp">
            <HelloApp />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/First">
            <First />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
