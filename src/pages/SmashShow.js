import React, { Component } from 'react'
import { Card, CardText, CardTitle, Col, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'


class SmashShow extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { character } = this.props
    return (
      <>
        <h1>{character.name}</h1>
        <Col sm="6">
          <Card body>
            <CardTitle>Hi, my name is {character.name}!</CardTitle>
            <img src={this.props.character.image} alt="char" width="250px" height="250px" />
            <CardText>I am {character.age} years old. I enjoy {character.enjoys}.</CardText>
            <NavLink to={`/smashedit/${character.id}`}>
              <Button id="newButton">Edit Character Profile</Button>
            </NavLink>
          </Card>
        </Col>
      </>
    )
  }
}

export default SmashShow
