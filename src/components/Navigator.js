import React from 'react'
import { Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import HelloApp from './Home'
import First from './First'

const Home = () => <First/>
const About = () => <h1>About</h1>
const Project = () => <h1>Project</h1>

class Navigator extends React.Component {
  render() {
    return (
      <div className="my-app">
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-menu">
              <div className="navbar-end">
                <NavLink exact to="/" activeClassName="is-active" className="navbar-item">
                  Home
                </NavLink>
                <NavLink to="/about" activeClassName="is-active" className="navbar-item">
                  About
                </NavLink>
                <NavLink to="/project" activeClassName="is-active" className="navbar-item">
                  Projects
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
        <div className="App container">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/project" component={Project} />
        </div>
      </div>
    )
  }
}


export default Navigator
