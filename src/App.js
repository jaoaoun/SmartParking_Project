import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/page/Home'
import Place1 from './components/page/Place1'
import Place2 from './components/page/Place2'
import AboutUs from './components/page/AboutUs'
import HeaderBar from './components/layout/HeaderBar'
import FooterHome from './components/layout/FooterHome'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <div>
        <Switch>

          
          <Route path="/Place2">
            <HeaderBar />
            <Place2 />
            <Footer />
          </Route>
          <Route path="/Place1">
            <HeaderBar />
            <Place1 />
            <Footer />
          </Route>
          <Route path="/AboutUs">
            <HeaderBar />
            <AboutUs />
            <Footer />
          </Route>
          <Route path="/">
            <HeaderBar />
            <Home />
            <FooterHome />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
