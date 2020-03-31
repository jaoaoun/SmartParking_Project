import React from 'react'

class Place2 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>Hello Place2</p>
        <img src={require('../pkc.gif')} alt="logo" className="place-logo" />
      </React.Fragment>
    )
  }
}

export default Place2