import React from 'react'

class First extends React.Component {



  render() {
		return (
      <React.Fragment>
        <p >Hello</p>
        <img src={require('../pkc.gif')} alt="logo" className="home-logo" />
      
	  </React.Fragment>
		)
	}
}

export default First
