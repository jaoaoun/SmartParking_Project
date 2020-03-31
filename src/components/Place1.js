import React from 'react'

class Place1 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>Hello Place1</p>
        <img src={require('../pkc.gif')} alt="logo" className="place-logo" />
      </React.Fragment>
    )
  }
}

export default Place1