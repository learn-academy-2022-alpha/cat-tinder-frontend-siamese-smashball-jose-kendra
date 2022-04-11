import React, { Component } from 'react'
import { Card, CardTitle, Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class SmashIndex extends Component {
  render() {
    return (
      <>
        <h1>Choose your character</h1>
        <br />
        <Col sm="6" className="cardIndex">
          {this.props.characters && this.props.characters.map(characters => {
            return (
              <Card body key={characters.id} >
                <CardTitle>
                  <NavLink to={`/SmashShow/${characters.id}`} key={characters.id}>
                    {characters.name}<br />
                    <img src={characters.image} width="250px" height="250px" />
                  </NavLink>
                </CardTitle>
              </Card>
            )
          })}
        </Col>
      </>
    )
  }
}

export default SmashIndex

