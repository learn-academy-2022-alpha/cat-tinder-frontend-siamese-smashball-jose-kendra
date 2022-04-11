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
        <h1>{character.name[0].toUpperCase()}{character.name.slice(1)}</h1>
        <Col sm="5" className="banana">
          <Card body >
            <CardTitle>Hi, my name is {character.name}!</CardTitle>
            <img src={this.props.character.image} alt="char" className="image" width="250px" height="250px" />
            <CardText>I am {character.age} years old.
              I enjoy {character.enjoys}.</CardText>
            <NavLink to={`/smashedit/${character.id}`}>
              <Button id="newButton">Edit Character Profile</Button>
            </NavLink>
            <br />
            <NavLink to={`/smashindex/${character.id}`}>
              <Button id="newButton">Delete Character Profile</Button>
            </NavLink>
          </Card>
        </Col>
      </>
    )
  }
}

export default SmashShow
