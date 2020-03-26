import React, { Component } from 'react'

class Home extends Component {
  handleClick() {
    console.log('aoun')
  }

  render() {
    return (
      <div className="home">
        <div className="home-header">
          <img src={require('../pkc.gif')} className="home-logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="home-intro">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>

        <button onClick={this.handleClick}>Next!</button>
      </div>
    )
  }
}

export default Home
