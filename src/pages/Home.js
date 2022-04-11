import React, { Component } from 'react'

class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <p className="supersmash">Super Smash Tinder App</p>
        <img className="smashimage" src="https://www.dexerto.com/wp-content/uploads/2021/12/20/smash-ultimate-special-edition-leaked-gameplay-nintendo-insider.jpg" width="750px" align="middle" />
      </>
    )
  }
}

export default Home
