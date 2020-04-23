import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import Home from './components/page/Home'
import Place1 from './components/page/Place1'
import Place2 from './components/page/Place2'
import AboutUs from './components/page/AboutUs'
import HeaderBar from './components/layout/HeaderBar'
import HeaderplaceBar from './components/layout/HeaderplaceBar'
import BtnAbout from './components/layout/BtnAbout'

function App() {
  /* Hello */

  return (
    <Router>
      <div>
        <Switch>
        <Route path="/Place2">
        <HeaderplaceBar/>
        <BtnAbout/>
            <Place2 />
          </Route>
          <Route path="/Place1">
            <HeaderplaceBar/>
            <BtnAbout/>
            <Place1 />
          </Route>
          <Route path="/AboutUs">
          <HeaderBar/>
            <AboutUs />
          </Route>
          <Route path="/">
          <HeaderBar/>
          <BtnAbout/>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
