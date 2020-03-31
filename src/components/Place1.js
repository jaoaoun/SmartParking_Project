import React from 'react'

class Place1 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>Hello Place1</p>
        <img src={require('../pic/Grey.png')} alt="logo" className="car-logo" />
        <img src={require('../pic/Grey.png')} alt="logo" className="car-logo" />
      </React.Fragment>
    )
  }
}

export default Place1