import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom"
*/

export default function HelloApp() {
  
  const { push } = useHistory()

  const handleClick = () => {
    push('/HelloApp')
  }

  return (
    <div className="home">
      <div className="home-header">
        <img src={require('../pkc.gif')} alt="logo" className="home-logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="home-intro">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <button onClick={handleClick}>Next</button>
      <Link to="/HelloApp">HelloApp</Link>
    </div>
  )
}
