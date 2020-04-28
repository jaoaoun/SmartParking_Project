import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './components/page/Home'
import Place1 from './components/page/Place1'
import Place2 from './components/page/Place2'
import AboutUs from './components/page/AboutUs'
import HeaderBar from './components/layout/HeaderBar'
import FooterHome from './components/layout/FooterHome'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Place2">
            <HeaderBar />
            <Place2 />
          </Route>
          <Route path="/Place1">
            <HeaderBar />
            <Place1 />
          </Route>
          <Route path="/AboutUs">
            <HeaderBar />
            <AboutUs />
          </Route>
          <Route path="/">
            <HeaderBar key="1" />
            <Home key="3" />
            <FooterHome key="2"/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
