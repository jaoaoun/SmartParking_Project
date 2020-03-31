import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HelloApp from './components/HelloApp'
import Home from './components/Home'
import Navigator from './components/Navigator'
import First from './components/First'
import SmartParking from './components/SmartParking'
import Place1 from './components/Place1'
import Place2 from './components/Place2'


function App() {
  /* Hello */

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <SmartParking />
          </Route>
          <Route path="/Place1">
            <Place1 />
          </Route>
          <Route path="/Place2">
            <Place2 />
          </Route>
          <Route path="/Navigator">
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
